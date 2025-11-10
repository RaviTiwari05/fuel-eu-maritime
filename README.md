# FuelEU Maritime — Full-Stack Compliance Module  
### React + TypeScript + Tailwind + Node.js + TypeScript + MySQL (Hexagonal Architecture)

This project implements a minimal but structured version of a Fuel EU Maritime Compliance Platform, including:

-  Route management  
-  Baseline comparison  
-  Compliance balance (CB) calculation  
-  Banking (Article 20)  
-  Pooling (Article 21)  
-  React dashboard + Node backend  
-  Clean hexagonal architecture (Ports & Adapters)

The assignment focuses on domain modeling, architectural separation, and productive use of AI tools.


#  1. Overview

The platform provides tools to monitor and evaluate a ship’s greenhouse gas (GHG) intensity and compliance with Fuel EU Maritime Regulation (EU 2023/1805).

The implemented features include:

###Frontend
- Dashboard with 4 tabs: **Routes, Compare, Banking, Pooling**
- Tables, charts, and API-driven UI
- Clean reusable components (Tabs, Table, Chart)
- TypeScript + TailwindCSS

### Backend
- Hexagonal architecture
- Route CRUD + baseline setter
- Comparison logic (percentDiff)
- Compliance Balance (CB) calculation:
  
CB = (TargetIntensity − ActualIntensity) × (FuelConsumption × 41,000 MJ/t)

- Banking (bank surplus + apply surplus)
- Pooling (validate and create pools)
- Prisma ORM + MySQL

#  2. Architecture Summary

The project follows Hexagonal (Ports & Adapters) architecture.


## Frontend Structure

src/
core/
domain/ # Entities
application/ # Use-cases
ports/ # Interfaces for API adapters
adapters/
ui/ # React components
infrastructure/
api/ # Axios API implementations
http/ # Axios instance
shared/ # Helpers, constants


 Core has no React imports  
 React UI uses ports  
 API implements outbound ports  
 Clean separation: UI ↔ Core ↔ API

## Backend Structure

src/
core/
domain/ # Pure domain logic models
application/ # Use-cases (business logic)
ports/ # Repository interfaces
adapters/
inbound/http/ # Express controllers
outbound/mysql/ # Prisma repositories
infrastructure/
server/ # Express server
db/ # Prisma client
shared/

Core contains all logic  
Controllers call use-cases only  
Repositories adapt DB to domain  

#  3. Setup & Run Instructions

##  3.1. Requirements
- Node.js 18+
- MySQL running locally
- npm or yarn
- Prisma installed automatically

#  3.2. Backend Setup

### 1. Navigate to backend

cd backend
2. Install dependencies

npm install
3. Configure database
In .env:


DATABASE_URL="mysql://root:<yourpassword>@localhost:3306/fueleu"
4. Run Prisma migrations

npx prisma migrate dev --name init
5. Seed routes

npm run seed
6. Start backend

npm run dev
Backend running at:


http://localhost:5000
3.3. Frontend Setup
1. Navigate to frontend

cd frontend
2. Install

npm install
3. Start

npm run dev
App will run at:


http://localhost:5173
4. How to Execute Tests
Backend Tests

cd backend
npm run test

Tests include:
CB calculation
Comparison logic
Banking edge cases
Pooling validation

Frontend Tests

cd frontend
npm run test

Tests include:
Component rendering
Route table
Comparison chart

Banking and pooling UI logic

5. Sample API Requests / Responses
GET /routes
Request:

GET http://localhost:5000/routes
Response:

[
  {
    "id": 1,
    "routeId": "R001",
    "vesselType": "Container",
    "fuelType": "HFO",
    "year": 2024,
    "ghgIntensity": 91.0,
    "fuelConsumption": 5000,
    "distance": 12000,
    "totalEmissions": 4500,
    "isBaseline": true
  }
]
POST /routes/:id/baseline

POST http://localhost:5000/routes/1/baseline
Response:


{ "message": "Baseline updated" }
GET /routes/comparison


[
  {
    "route": { ... },
    "diff": -3.46,
    "compliant": true
  }
]
 /compliance/cb


GET /compliance/cb?shipId=S001&year=2024&actualIntensity=91&fuelConsumption=5000
Response:


{ "cb": -34000000 }
 /banking/bank
bash
Copy code
POST /banking/bank
Body:


{
  "shipId": "S001",
  "year": 2024,
  "amount": 200
}
 POST /pools

{
  "year": 2024,
  "members": [
    { "shipId": "S001", "cbBefore": 200, "cbAfter": 200 },
    { "shipId": "S002", "cbBefore": -100, "cbAfter": 0 }
  ]
}
