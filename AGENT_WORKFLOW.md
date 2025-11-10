# AI Agent Workflow Log

This document explains how I used **ChatGPT (GPT-5)** as the only AI agent during the development of the FuelEU Maritime Full-Stack assignment.  
I relied on ChatGPT for code generation, refactoring, architecture guidance, and domain clarification.

---

##  Agents Used

### 1. ChatGPT (GPT-5)
This was the only agent used in the entire project.  
I used ChatGPT for:
- Understanding the FuelEU Maritime rules (CB formula, banking, pooling)
- Designing the hexagonal architecture for both backend and frontend
- Generating TypeScript interfaces, use-cases, ports, repositories
- Writing React + Tailwind UI components
- Writing Prisma models and seed data
- Debugging TypeScript / Prisma errors
- Writing controller logic and API client wrappers
- Creating documentation templates

I did not used other AI

---

## Prompts & Outputs

### Example 1 — Backend Ports + Repositories

Prompts given to ChatGPT :--- 
Provide clean TypeScript interfaces for ports in a hexagonal architecture:
RoutesRepositoryPort, ComplianceRepositoryPort, BankingRepositoryPort, PoolingRepositoryPort.
Each should match the data used in FuelEU Maritime compliance.


ChatGPT Output (excerpt):
export interface RoutesRepositoryPort {
  getAll(): Promise<Route[]>;
  setBaseline(id: number): Promise<void>;
  getBaseline(): Promise<Route | null>;
}
I accepted it because it followed hexagonal boundaries perfectly and matched my architecture.

Example 2 — Pooling Logic Refinement

Initial Prompt:

Write pooling use-case logic that ensures:
- sum(adjustedCB) >= 0
- deficit ship cannot exit worse
- surplus ship cannot exit negative
- greedy distribution from surplus to deficit

ChatGPT Initial Output:
The logic was conceptually correct but allowed a deficit ship to remain unchanged.

Refined Prompt: Correct your pooling code. Deficit ships must exit improved (cb_after >= cb_before + transferred amount). Surplus ships must never become negative after allocation.
Corrected Output-for (const deficit of deficits) {
  for (const surplus of surpluses) {
    if (surplus.remaining <= 0) continue;

    const amount = Math.min(surplus.remaining, Math.abs(deficit.remaining));
    surplus.remaining -= amount;
    deficit.remaining += amount;
  }
}
I accepted it because it aligned fully with Article 21 rules after refinement.

Validation / Corrections:--

->Even though I used ChatGPT heavily, I manually validated everything:
->Verified Prisma fields matched schema output.
->Checked TypeScript strict mode errors and fixed missing types.
->Tested backend endpoints using sample requests.
->Validated CB formula correctness using sample values.
->Adjusted frontend components so they aligned with backend API shape.
->Ensured React used proper key props, state handling, and controlled inputs.
->Fixed tailwind classes manually where spacing looked incorrect.
->Ensured hexagonal layers were not mixed (clean separation).
->Whenever ChatGPT made mistakes (wrong field names, incorrect pooling logic, slightly wrong TypeScript types), I corrected them manually.

Where gpt saved time- 
Creating the entire folder structure for frontend + backend.
Writing all ports, domain models, and use-cases faster.
Generating boilerplate controllers, API routes, Axios clients.
Explaining FuelEU Maritime terminology in easy language.
Converting complex compliance rules into simple formulas.
Writing full React pages quickly without repeating patterns.

Where gpt required corrections-
Sometimes hallucinated Prisma field names or types.
Some React components needed type adjustments.
A few backend endpoints needed stronger input validation.
Pooling logic needed multiple refinements until perfect.
Charts required adjustments to match React-ChartJS-2 syntax.

How I used it effectively-
Used it for planning architecture before writing code.
Used incremental prompts to refine code step-by-step.
Provided exact schema + context so it produced correct Prisma code.
Broke complex tasks into smaller prompts.
Validated every output before using it.

Best practice which I followed - 
Maintained strict separation of concerns (core → ports → adapters).
Ensured controllers had no business logic.
Reused use-cases for clean backend logic.
Followed Tailwind responsive classes for UI.
Used ChatGPT mainly for speed, not copy-paste blindly.
Made sure every AI-generated snippet was manually reviewed.
Used clear prompts describing input, output, folder structure, and TypeScript expectations.
