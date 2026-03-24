type BibtexFields = Record<string, string>;

export interface ParsedBibtexEntry {
  entryType: string;
  citationKey: string;
  fields: BibtexFields;
}

export interface PublicationCitation {
  authors: string[];
  title: string;
  venue: string;
  year?: string;
  note?: string;
  volume?: string;
  number?: string;
  pages?: string;
  publisher?: string;
  entryType?: string;
}

function skipWhitespace(input: string, index: number) {
  let cursor = index;
  while (cursor < input.length && /\s|,/.test(input[cursor])) {
    cursor += 1;
  }
  return cursor;
}

function readBalancedValue(input: string, index: number) {
  const opener = input[index];
  if (opener !== "{" && opener !== "\"") {
    let cursor = index;
    while (cursor < input.length && input[cursor] !== ",") {
      cursor += 1;
    }
    return {
      value: input.slice(index, cursor).trim(),
      nextIndex: cursor
    };
  }

  const closer = opener === "{" ? "}" : "\"";
  let cursor = index + 1;
  let depth = opener === "{" ? 1 : 0;
  let value = "";

  while (cursor < input.length) {
    const char = input[cursor];

    if (opener === "{") {
      if (char === "{") {
        depth += 1;
        value += char;
        cursor += 1;
        continue;
      }

      if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          return { value: value.trim(), nextIndex: cursor + 1 };
        }
        value += char;
        cursor += 1;
        continue;
      }
    } else if (char === "\"" && input[cursor - 1] !== "\\") {
      return { value: value.trim(), nextIndex: cursor + 1 };
    }

    value += char;
    cursor += 1;
  }

  return { value: value.trim(), nextIndex: cursor };
}

function normalizeBibtexText(value?: string) {
  if (!value) {
    return "";
  }

  return value
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseBibtexEntry(source?: string): ParsedBibtexEntry | null {
  if (!source) {
    return null;
  }

  const trimmed = source.trim();
  const headerMatch = trimmed.match(/^@(\w+)\s*[{(]\s*([^,\s]+)\s*,/s);
  if (!headerMatch) {
    return null;
  }

  const [, entryType, citationKey] = headerMatch;
  let cursor = headerMatch[0].length;
  const fields: BibtexFields = {};

  while (cursor < trimmed.length) {
    cursor = skipWhitespace(trimmed, cursor);

    const char = trimmed[cursor];
    if (!char || char === "}" || char === ")") {
      break;
    }

    const keyMatch = trimmed.slice(cursor).match(/^([A-Za-z][A-Za-z0-9_-]*)\s*=/);
    if (!keyMatch) {
      break;
    }

    const rawKey = keyMatch[1];
    const normalizedKey = rawKey.toLowerCase();
    cursor += keyMatch[0].length;
    cursor = skipWhitespace(trimmed, cursor);

    const { value, nextIndex } = readBalancedValue(trimmed, cursor);
    fields[normalizedKey] = normalizeBibtexText(value);
    cursor = nextIndex;
  }

  return {
    entryType: entryType.toLowerCase(),
    citationKey,
    fields
  };
}

export function parseBibtexAuthors(authorField?: string) {
  const normalized = normalizeBibtexText(authorField);
  if (!normalized) {
    return [];
  }

  if (/\s+and\s+/i.test(normalized)) {
    return normalized
      .split(/\s+and\s+/i)
      .map((author) => author.trim())
      .filter(Boolean);
  }

  const commaSeparatedAuthors = normalized
    .split(/\s*,\s*/)
    .map((author) => author.trim())
    .filter(Boolean);

  const looksLikeFullNameList =
    commaSeparatedAuthors.length > 1 && commaSeparatedAuthors.every((author) => /\s/.test(author));

  if (looksLikeFullNameList) {
    return commaSeparatedAuthors;
  }

  return [normalized];
}

function inferVenue(fields: BibtexFields) {
  return fields.journal || fields.booktitle || fields.school || fields.institution || "";
}

export function getPublicationCitationFromBibtex(source?: string): PublicationCitation | null {
  const parsed = parseBibtexEntry(source);
  if (!parsed) {
    return null;
  }

  return {
    authors: parseBibtexAuthors(parsed.fields.author),
    title: parsed.fields.title || "",
    venue: inferVenue(parsed.fields),
    year: parsed.fields.year,
    note: parsed.fields.note,
    volume: parsed.fields.volume,
    number: parsed.fields.number,
    pages: parsed.fields.pages,
    publisher: parsed.fields.publisher,
    entryType: parsed.entryType
  };
}

function formatAuthorName(author: string) {
  const normalized = author.trim();
  if (!normalized) {
    return "";
  }

  if (normalized.includes(",")) {
    return normalized.replace(/\s+/g, " ");
  }

  const parts = normalized.split(/\s+/).filter(Boolean);
  if (parts.length < 2) {
    return normalized;
  }

  const familyName = parts.at(-1);
  const givenNames = parts.slice(0, -1).join(" ");
  return `${familyName}, ${givenNames}`;
}

export function formatPublicationCitation(citation: PublicationCitation) {
  const authors = citation.authors.map(formatAuthorName).filter(Boolean).join("; ");
  const detailParts = [citation.venue];

  if (citation.volume) {
    detailParts.push(`vol. ${citation.volume}`);
  }

  if (citation.number) {
    detailParts.push(`no. ${citation.number}`);
  }

  if (citation.pages) {
    detailParts.push(`pp. ${citation.pages.replace(/--/g, "-")}`);
  }

  if (citation.year) {
    detailParts.push(citation.year);
  }

  if (citation.note) {
    detailParts.push(citation.note);
  }

  if (citation.publisher) {
    detailParts.push(citation.publisher);
  }

  return {
    authors,
    title: citation.title,
    detail: detailParts.filter(Boolean).join(", ")
  };
}
