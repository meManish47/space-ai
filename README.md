# Employee Directory Application

This project is a full-stack Employee Directory application built as part of the SPACE AI MERN Stack Internship assignment.  
It uses Node.js with GraphQL and MongoDB for the backend and Next.js (App Router) for the frontend.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Apollo Server 4
- GraphQL
- MongoDB (Node.js Driver – no Mongoose)

### Frontend
- Next.js (App Router)
- GraphQL Client
- Tailwind CSS
- Client & Server Components

---

## 📦 Features Implemented

### Backend
- GraphQL API using Apollo Server
- MongoDB connection using native driver
- Employee schema with fields:
  - id, name, position, department, salary
- Queries:
  - `getAllEmployees`
  - `getEmployeeDetails(id)`
- Mutation:
  - `addEmployee`
- Proper error handling for invalid IDs
- `_id` to `id` mapping at GraphQL layer

---

### Frontend
- Home page listing employees in a table
- Department-based filtering
- Add New Employee modal with form validation
- Optimistic UI update after adding employee
- Employee Detail page (`/employee/[id]`)
- Back navigation to home page
- Loading and error handling states
- Responsive UI using Tailwind CSS

---

## 🧭 Pages

- `/`  
  Displays all employees with department filter and add employee option

- `/employee/[id]`  
  Displays full details of a selected employee

---

## 🧠 Architecture Highlights

- Server Components used for data fetching (SEO & performance)
- Client Components handle interactivity and UI state
- GraphQL used for efficient data querying
- Modular and scalable component structure

---

## ▶️ How to Run Locally

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd <project-folder>
