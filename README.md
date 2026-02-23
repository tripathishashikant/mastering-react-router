# React Router SaaS Portal Challenge

A hands-on project to master advanced **React Router (v6.4+) data APIs** using a realistic SaaS dashboard.

This project simulates a multi-tenant SaaS portal where users log in, view their projects, and navigate nested dashboards with optimized data loading.

---

## 🎯 Goal

Build a **SaaS dashboard** that teaches:

- Nested routing
- Data loaders
- Auth guards
- Layout routes
- Route-level data caching
- Avoiding duplicate fetches

---

## 🧠 Problem Statement

You are building a SaaS portal where:

- Multiple users exist
- Each user owns multiple projects
- Each project has nested pages (overview, analytics, settings)
- Auth is required
- Data should not refetch unnecessarily

The challenge is to design **clean routing + efficient data flow**.

---

## 🏗️ App Structure

```text
/login
/app
/projects
/projects/:projectId
/overview
/analytics
/settings
```

---

## 🗺️ Routing Hierarchy

```text
Root
├── Public Layout
│   └── Login
│
└── Protected Layout (Auth Guard)
    └── Projects Layout (loads projects once)
        ├── Projects List
        └── Project Layout (loads single project)
            ├── Overview
            ├── Analytics
            └── Settings
```

---

## 📊 Architecture Diagram

```text
            Root
             |
    -------------------
    |                 |
 Public          Protected
 Layout           Layout
   |                 |
 Login        Projects Layout
                    |
             -----------------
             |               |
       Projects List    Project Layout
                             |
                     -------------------
                     |    |     |
                 Overview Analytics Settings
```

---

## 🔑 Key Challenges

### 1. Auth Guard

- Redirect unauthenticated users to `/login`
- Allow access to `/app/*` only after login

**Concepts:**

- Loader redirects
- Protected layouts

---

### 2. Avoid Duplicate Fetching

Projects should load **once** and be reused everywhere.

**Wrong:**

- Fetching projects in every page

**Correct:**

- Fetch in parent loader
- Share via `useRouteLoaderData`

---

### 3. Nested Data Loading

Project pages should fetch project-specific data only once.

**Pattern:**

- Parent loader → project data
- Children → reuse it

---

### 4. Data Ownership Rules

| Route Level | Owns Data |
|------------|----------|
| Root | Auth session |
| Projects Layout | All projects |
| Project Layout | Single project |
| Children | Reuse parent data |

---

## 🧪 Example Data Flow

User opens /app/projects/101/analytics

1. Auth loader runs

2. Projects loader runs (cached after first load)

3. Project loader runs (loads project 101)

4. Analytics page reads project from parent


No duplicate API calls.

---

## 🧰 Skills You Build

- Real-world React Router architecture
- Thinking in route ownership
- Data caching via loaders
- Auth at routing level
- Nested layouts

---

## 🧱 Recommended Tech

- React + Vite
- React Router v6.4+
- Mock JSON server
- Optional: Zustand / Redux (not required)

---

## 📦 Mock Data Requirements

- Minimum 3 users
- Each user → 10 projects
- Each project:
  - id
  - name
  - ownerId
  - analytics stats
  - settings

---

## 🏁 Success Criteria

You did it right if:

- No duplicate fetches
- Refreshing nested routes doesn’t break data
- Auth redirects work
- Loaders feel predictable
- Navigation feels instant after first load

---

## 🧩 Bonus Challenges

- Prefetch on hover
- Optimistic UI
- Error boundaries per route
- Skeleton loaders
- Role-based access

---

## 🚀 Why This Matters

Most devs know routing.  
Few know **data-aware routing**.

This project pushes you into:

- Architecture thinking
- Performance mindset
- Senior-level React patterns

Perfect if you want to move from:  
**Component thinking → System thinking**

---

## 💡 Suggested Repo Names

- saas-router-lab
- react-router-saas-portal
- router-data-challenge
- nested-router-architecture
- router-mastery-project
