## Getting Started

### How To Run

1.  **Clone repository:**

    ```bash
    git clone <repository-url>
    cd <repository project>
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
