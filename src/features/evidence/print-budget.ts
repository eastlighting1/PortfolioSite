export interface PrintBudget {
  maxCases: number;
  maxMetricsPerCase: number;
  maxDecisionsPerCase: number;
  maxArtifactsPerCase: number;
  maxResearchItems: number;
  maxCredentials: number;
  maxWorkflowStagesPerCase: number;
  maxArchitectureNodesPerCase: number;
}

export const defaultPrintBudget: PrintBudget = {
  maxCases: 3,
  maxMetricsPerCase: 3,
  maxDecisionsPerCase: 3,
  maxArtifactsPerCase: 4,
  maxResearchItems: 3,
  maxCredentials: 6,
  maxWorkflowStagesPerCase: 5,
  maxArchitectureNodesPerCase: 5
};

export const takeForPrint = <T>(items: T[], limit: number) => items.slice(0, limit);

