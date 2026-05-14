# MD Odontologia - Project Instructions

## Deployment Workflow
- **Primary Method:** Always prefer the **Vercel Dashboard** (https://vercel.com/dashboard) for initial project setup and monitoring.
- **Auto-Deploy:** Git pushes to the `master` branch trigger automatic deployments once the project is linked in the Vercel Dashboard.
- **CLI Usage:** Avoid using the Vercel CLI for authentication-heavy tasks (login, link) in headless/agent environments, as it frequently fails. Use it only for automated CI/CD if a token is provided.
- **Git Protocol:** Prefer **SSH** (`git@github.com:...`) over HTTPS for git operations to avoid credential prompts in headless environments.

## Repository Structure & Architecture
- **Static Site Root:** The main website content is located in `projects/md-odontologia-digital/`.
- **Vercel Config:** `vercel.json` in the root directs traffic to the static site folder.
- **Documentation:** Deployment guides and lessons learned are kept in the root (`DEPLOYMENT-GUIDE.md`, `DEPLOYMENT-LESSONS-LEARNED.md`).

## Performance & Standards
- Target Lighthouse scores of 90+ for all metrics.
- Ensure all images have descriptive `alt` tags and use lazy loading.
- Verify meta tags (Open Graph) are present for all main pages.
