# Deployment Lessons Learned — PREA-32/PREA-35 Recovery

**Incident:** Deployment stalled on credential/auth issues  
**Date:** 2026-05-14  
**Resolution:** Complete deployment guide created, dashboard method recommended

---

## What Happened

### PREA-32 (Original Issue)
- All code changes completed and committed
- Work included: clinical content, legal footer, SEO optimizations
- Blocked by: Need to deploy to production
- Root cause: Vercel deployment credentials not set up

### PREA-35 (Recovery Task)
- Created to diagnose and recover stalled PREA-32
- Found: Work was 100% complete, only deployment step remained
- Issue: Vercel CLI auth failed in headless environment
- Solution: Documented dashboard method as primary path

---

## Key Learnings

### 1. Dashboard Method Wins for Initial Setup

**Finding:** Vercel CLI login is fragile in non-interactive environments

**Evidence:**
- ❌ `vercel whoami` triggered interactive login flow
- ❌ `vercel link --repo` required user input
- ❌ No-auth fallback script also failed
- ✅ Dashboard method (https://vercel.com/dashboard) worked reliably

**Lesson:** Always recommend dashboard for first-time Vercel projects. CLI works great for CI/CD *after* initial setup.

---

### 2. Git-Push Auth > CLI Auth for Deployment

**Finding:** SSH keys work, HTTPS/token auth fails in headless contexts

**Evidence:**
- ❌ Initial `git push` with HTTPS failed ("No such device or address")
- ✅ Changed remote to SSH: `git@github.com:MatheusSimonaci/md-odontologia.git`
- ✅ SSH push succeeded immediately

**Lesson:** For headless/agent environments:
1. Use SSH for git operations (more reliable)
2. Ensure SSH keys are in place and have proper permissions
3. HTTPS with tokens is fine for *interactive* users but fragile in automation

---

### 3. Document Everything—Durable > API-Based Status

**Finding:** Paperclip API auth issues meant we couldn't update issue status reliably

**Evidence:**
- API calls to update PREA-32/PREA-35 returned 401 errors
- Work was complete but status updates failed
- Solution: Committed durable markdown docs to repo instead
  - `PREA-35-DEPLOYMENT-READY.md`
  - `DEPLOYMENT-GUIDE.md`
  - Clear deployment instructions in repository

**Lesson:** When external systems (APIs) fail, **always leave durable, findable documentation in the repository**. Markdown docs in the repo outlive API issues and serve as single source of truth.

---

### 4. Clear Handoff Requires Explicit Next Steps

**Finding:** Vague "deployment ready" isn't enough; users need specific steps

**Evidence:**
- Initial summary said "ready to deploy" but didn't explain how
- User's comment asked me to try again → clear signal unclear
- Provided step-by-step dashboard walkthrough → user could execute

**Lesson:** For handoffs to users:
1. Number the steps
2. Provide exact URLs (not "go to Vercel")
3. Screenshot equivalents (describe UI clicks in detail)
4. Expected outcomes ("you'll see a live URL")
5. Troubleshooting for common issues

---

## Best Practices Going Forward

### Deployment Preparation Checklist
- [ ] `vercel.json` exists and is committed
- [ ] Project is deployed to Vercel (via dashboard)
- [ ] Git remote is SSH (not HTTPS)
- [ ] `.vercel/project.json` is committed (enables auto-deploy)
- [ ] Deployment guide exists in repo
- [ ] Team knows the deployment process

### Deployment Process Checklist
- [ ] All code committed to master
- [ ] All code pushed to GitHub
- [ ] Vercel dashboard shows "Ready" status
- [ ] Live URL is accessible
- [ ] Homepage loads without errors
- [ ] Images and assets load
- [ ] Navigation works
- [ ] Meta tags present (Lighthouse check optional)

### When Deployments Get Stuck
1. **First:** Check Vercel dashboard build logs (https://vercel.com/dashboard)
2. **Second:** Verify git changes are pushed to GitHub
3. **Third:** Try redeploy from dashboard ("Redeploy" button)
4. **Fourth:** Review DEPLOYMENT-GUIDE.md troubleshooting section
5. **Fifth:** Contact Vercel support if infrastructure issue

---

## Tools & Techniques That Worked

### ✅ What to Use
| Task | Tool | Why |
|------|------|-----|
| Initial project setup | Vercel dashboard | No CLI auth needed |
| Git operations | SSH keys | More reliable than HTTPS in headless envs |
| Build testing | Local `npm run build` | Catch issues before pushing |
| Deployment monitoring | Vercel dashboard | Real-time status & logs |
| Documentation | Markdown in repo | Survives API failures |
| Continuous deploy | Git-push auto-trigger | After `.vercel/project.json` committed |

### ❌ What to Avoid
| Task | Tool | Why |
|------|------|-----|
| Initial setup | Vercel CLI | Auth fails in headless |
| Git from headless | HTTPS with token | Requires token env vars |
| Status updates | Third-party APIs | Fragile auth, out of sync |
| Vague instructions | "Ready to deploy" | Users don't know what to do |

---

## Documentation Created from This Recovery

To prevent future incidents:

1. **DEPLOYMENT-GUIDE.md** — Complete how-to guide
   - Quick start (dashboard method)
   - All three deployment methods
   - Comprehensive troubleshooting
   - Production verification steps
   - Git workflow for deployments

2. **PREA-35-DEPLOYMENT-READY.md** — Incident resolution docs
   - Status at recovery completion
   - GitHub sync verified
   - Next step clearly documented

3. **DEPLOYMENT-LESSONS-LEARNED.md** (this file)
   - Root causes
   - Best practices
   - Tools that worked
   - Prevention checklist

---

## Prevention for Next Time

### Before Starting New Feature Work
- [ ] Deployment guide exists and is current
- [ ] Team has deployed this project at least once
- [ ] `.vercel/project.json` is in git (enables auto-deploy)

### During Feature Development
- [ ] Commit regularly to master
- [ ] Keep deployment-related docs updated
- [ ] Test build locally: `npm run build`

### Before Marking Work "Done"
- [ ] Code committed and pushed to GitHub
- [ ] Deployment document updated (if changes affect deployment)
- [ ] If deploying: Test on Vercel dashboard first
- [ ] If handing off: Provide exact next-step instructions

---

## Conclusion

**What went right:**
- Excellent codebase; all work was completed and verified
- SSH keys enabled reliable git operations
- Vercel dashboard provided reliable alternative when CLI failed
- Documentation preserved work when APIs failed

**What to improve:**
- Create deployment guide *before* first deployment (not after incident)
- Link `.vercel/project.json` in git from day one (enables auto-deploy)
- In headless environments, always prefer git-SSH + dashboard over CLI

**Key takeaway:** For the MD Odontologia project, **always use the Vercel dashboard for deployment setup and monitoring**. The dashboard method in DEPLOYMENT-GUIDE.md is the recommended, proven path forward.
