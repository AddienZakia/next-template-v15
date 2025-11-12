## Hiring Applications

### Project Overview

Hiring Applications is a web platform designed to streamline the recruitment process, from job posting creation to candidate applications. The application provides an admin dashboard for managing job listings and applicant criteria, as well as a registration page for candidates who wish to apply.

### Application Features:

- **Admin Dashboard:**
  - Create, read, update, and delete (CRUD) job listings.
  - Manage applicant information criteria required for each job listing.
  - View the list of applicants who have applied for each job listing.
- **Application Form (Job Seeker):**
  - Dynamic job application form based on criteria set by the admin.
  - Form validation using Zod and React Hook Form.
- **Authentication Protection:**
  - User login and registration.
  - Special admin login system using personal tokens from environment variables.
  - Middleware for protecting pages based on login status and user role.
- **Data Storage:**
  - Uses localStorage as a mock database to store user data, job listings, information criteria, and applicant applications.

- **Sandbox Page**
  - a testing area to try UI components or features safely without affecting real data. You can access it through this route path: `/sandbox`

### Folder Strucutured

```text
public/
├── images/
│   ├── admin/
│   ├── verification/
│   ├── logo-rakamin.png
│   └── logo-rect.png

src/
├── app/
│   ├── (dashboard)/
│   │   └── admin/
│   ├── dashboard/
│   ├── auth/
│   ├── (container)/
│   │   ├── login/
│   │   └── register/
│   ├── sandbox/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   └── ui/
│       │ └── (ShadcnUI Component)
│       ├── GoogleIcon.tsx
│       └── Typography.tsx
├── hooks/
│   ├── useApplicationHook.ts
│   ├── useInformationHook.ts
│   ├── useJobHook.ts
│   ├── useLoginHook.ts
│   └── useRegisterHook.ts
├── lib/
│   ├── authService.ts
│   ├── cookie.ts
│   ├── database.ts
│   ├── font.ts
│   └── utils.ts
├── store/
│   └── useAuthStore.ts
├── types/
│   ├── auth/
│   ├── components/
│   ├── store/
│   ├── api.ts
│   ├── database.ts
│   ├── validations/
│   └── middleware.ts

.env.local
.gitignore
.lintstagedrc.js
.prettierrc
biome.json
bun.lock
.commitlint.config.cjs
components.json
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
tsconfig.json
```

### Entity Relational Diagram (ERD)

This app works with mock data but follows the entity connections from the ERD. Here are the ERD links: [https://dbdiagram.io/d/hiring-69142fd36735e1117063a2c3](https://dbdiagram.io/d/hiring-69142fd36735e1117063a2c3)

### Tech Stack Used

- Next.js
- TailwindCSS
- Typescript
- ShadcnUI
- Zustand (Global State)
- Zod (Validations)
- React Hook Form (Form management)
- Localstorage (Mock Data)

Add-ons:

- Biome.js (Formatting & Linting)
- Conventional Commit

### How To Run

1.  **Clone repository:**

    ```bash
    git clone https://github.com/AddienZakia/hiring-application.git
    cd hiring-applications
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Create environment file (`.env.local`) or (`.env`):**

    ```env
    NEXT_PUBLIC_ADMIN_TOKEN = your_admin_token_here
    ```

4.  **Run development server:**

    ```bash
    bun run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) to preview the applications

6.  Open the browser’s developer tools, go to the console, and paste the following code to generate dummy data (since this project uses localStorage as its database).

Dummy Data Code: [https://pastebin.com/FFBaVaa6](https://pastebin.com/FFBaVaa6)

## Commit Message Convention

This website follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Format

`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`

### 1. Type

Available types are:

- feat → Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)

### 2. Optional Scope

Labels per page Ex: `feat(pre-event): add date label`

\*If there is no scope needed, you don't need to write it

### 3. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence
