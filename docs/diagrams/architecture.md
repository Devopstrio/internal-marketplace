# Architecture & Platform Diagrams

## 11. Multi-Cloud Provisioning Topology (Detailed)
*How the marketplace orchestrates resources across cloud boundaries.*

```mermaid
graph TD
    subgraph "Marketplace Control Plane"
        Portal[Marketplace UI]
        Engine[Provisioning Engine]
    end
    subgraph "Cloud Providers"
        AWS[AWS Production]
        Azure[Azure Compliance Zone]
        GCP[GCP Data Analytics]
    end
    subgraph "Local Runtime"
        K8s[K8s Management Cluster]
    end
    Portal --> Engine
    Engine --> AWS
    Engine --> Azure
    Engine --> GCP
    Engine --> K8s
```

## 13. "Golden Path" Onboarding Lifecycle
```mermaid
graph LR
    User[New Developer] --> Template[Select Golden Path]
    Template --> Provision[Automated Environment Setup]
    Provision --> Deploy[First "Hello World" Deployment]
    Deploy --> Verify[Platform Health Check]
```

## 20. Chargeback & Cost Allocation Model
```mermaid
stateDiagram-v2
    Provision --> Tag: Assign Team Tags
    Tag --> Estimate: Calculate Infracost
    Estimate --> Bill: Track Actual Usage
    Bill --> Report: Generate Team Chargeback
```
