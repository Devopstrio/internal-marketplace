export enum ServiceType {
  INFRASTRUCTURE = "INFRASTRUCTURE",
  APPLICATION = "APPLICATION",
  API = "API",
  DATA_PRODUCT = "DATA_PRODUCT"
}

export enum ProvisioningStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  DEPROVISIONING = "DEPROVISIONING",
  DELETED = "DELETED"
}

export interface ServiceCatalogItem {
  id: string;
  name: string;
  description: string;
  type: ServiceType;
  owner: string;
  version: string;
  sla: string;
  costEstimate: number;
  tags: string[];
  templateId: string;
}

export interface ProvisioningRequest {
  id: string;
  serviceId: string;
  requesterId: string;
  environment: "DEV" | "STAGING" | "PROD";
  status: ProvisioningStatus;
  requestedAt: string;
  completedAt?: string;
  output?: Record<string, any>;
  costAllocationCode: string;
}

export interface UsageMetrics {
  serviceId: string;
  instanceCount: number;
  totalCost: number;
  activeUsers: number;
  uptimePercentage: number;
}
