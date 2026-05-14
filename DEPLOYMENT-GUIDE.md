# MD Odontologia — Deployment Guide

**Last Updated:** 2026-05-14  
**Status:** Production-ready  
**Project:** https://github.com/MatheusSimonaci/md-odontologia

---

## Quick Start (Recommended Path)

### Via Vercel Dashboard (No CLI Auth Required)

Fastest, most reliable method for deployments.

1. Visit **https://vercel.com/dashboard**
2. Click **"Add New..." → "Project"**
3. Click **"Import Git Repository"**
4. Authorize GitHub (if first time)
5. Select **`MatheusSimonaci/md-odontologia`**
6. Vercel auto-detects `vercel.json` config
7. Click **"Deploy"**

**Timeline:** ~2 minutes total  
**Result:** Live URL like `https://md-odontologia-abc123.vercel.app`

---

## Prerequisites

### For All Methods
- ✅ Git repository synced to GitHub: `MatheusSimonaci/md-odontologia`
- ✅ `vercel.json` in repo root (pre-configured with output directory)
- ✅ All code committed and pushed to `master` branch

### For CLI Method (Optional)
- Node.js 14+ installed
- `npm install -g vercel` (if using CLI)
- Vercel account at https://vercel.com

---

## Deployment Methods

### Method 1: Dashboard (Recommended) ✅

**Best for:** First-time setup, when CLI has auth issues, manual deployments

**Steps:**
1. Go to https://vercel.com/dashboard
2. Add New → Project
3. Import Git Repository → GitHub
4. Select `MatheusSimonaci/md-odontologia`
5. Deploy

**Advantages:**
- No local CLI setup required
- Visual feedback on build progress
- Automatic git-push deploys after linking
- Easy to manage multiple environments

**Time:** ~2 minutes

---

### Method 2: Vercel CLI

**Best for:** Automated deployments, CI/CD integration

**One-time setup:**
```bash
# Install CLI globally
npm install -g vercel

# Login (opens browser for auth)
vercel login

# Link project to Vercel
vercel link --repo

# This creates .vercel/project.json (commit this)
git add .vercel/project.json
git commit -m "chore: link to Vercel project"
git push
```

**Deploy:**
```bash
vercel deploy --prod
```

**Advantages:**
- Scriptable for CI/CD
- Direct control over preview vs production
- Build logs in terminal

**Limitations:**
- Requires interactive login (may fail in headless environments)
- Token management needed for non-interactive CI

---

### Method 3: Git-Push Auto-Deploy

**Best for:** Continuous deployment after initial setup

**How it works:**
Once project is linked to Vercel (via dashboard or CLI), pushes to GitHub automatically trigger deployments:

```bash
# Make changes
git add .
git commit -m "feat: update content"
git push origin master
# Vercel automatically deploys!
```

**Setup:** Complete Method 1 or 2 first

---

## Troubleshooting

### "No Vercel Project Found"

**Cause:** Project not yet imported to Vercel  
**Fix:** Use dashboard method (Method 1) to import from GitHub

### Vercel CLI: "No Existing Credentials Found"

**Cause:** `vercel login` failed or token expired  
**Fix:** Re-authenticate:
```bash
vercel logout
vercel login
```

### Build Fails: "Output Directory Not Found"

**Cause:** `vercel.json` output path is wrong  
**Current config:** `projects/md-odontologia-digital`  
**Fix:** Verify output directory exists:
```bash
ls -la projects/md-odontologia-digital/
```

If missing, rebuild locally:
```bash
npm run build
```

### GitHub Auth Failed on Dashboard

**Cause:** Vercel GitHub app not authorized  
**Fix:** 
1. Go to https://github.com/settings/apps/authorizations
2. Find "Vercel" app
3. Click "Grant" to reauthorize

### Deployment Stuck in "Building"

**Cause:** Build timeout (usually >15 minutes)  
**Fix:**
1. Check Vercel dashboard for build logs
2. SSH into repo and test build locally:
   ```bash
   npm ci
   npm run build
   ```
3. Redeploy from dashboard

---

## Local Testing Before Deploy

### Test Build
```bash
npm run build
```

### Verify Output
```bash
ls -la projects/md-odontologia-digital/
# Should contain HTML, CSS, JS files
```

### Test Locally (if server available)
```bash
npm run dev
# Visit http://localhost:3000 (or shown port)
```

---

## Production Verification

After deployment completes:

1. **Visit live URL** (from Vercel dashboard)
2. **Check homepage loads** — hero section visible, no 404s
3. **Verify images load** — logo, cases gallery, testimonials
4. **Test navigation** — menu, links functional
5. **Check meta tags** — Open Graph, description tags present
6. **Lighthouse audit** — Optional, https://pagespeed.web.dev/

---

## Git Workflow for Deployments

### Safe Deployment Process

```bash
# 1. Make changes on feature branch
git checkout -b feature/my-change
git add .
git commit -m "feat: add new case to gallery"

# 2. Push and create PR (for code review)
git push origin feature/my-change

# 3. After review, merge to master
git checkout master
git pull origin master
git merge feature/my-change

# 4. Push to master (auto-deploys if linked)
git push origin master

# 5. Monitor deployment on Vercel dashboard
# https://vercel.com/dashboard → Project → Deployments
```

### Quick Hotfix Directly to Master (for urgent changes only)

```bash
git checkout master
git pull origin master
git add .
git commit -m "fix: urgent typo fix"
git push origin master
# Auto-deploys to production
```

---

## Monitoring & Rollback

### Check Deployment Status
- **Vercel Dashboard:** https://vercel.com/dashboard → Project → Deployments
- **Recent builds** listed with status (Building / Ready / Failed)

### Rollback to Previous Version
1. Go to Vercel Dashboard
2. Click "Deployments" tab
3. Find previous working deployment
4. Click **"Promote to Production"**

Alternatively, revert git commit:
```bash
git revert HEAD
git push origin master
# New deployment will use reverted code
```

---

## Lessons Learned (PREA-32 Recovery)

### What Worked Well
- ✅ Dashboard method is reliable and requires no CLI setup
- ✅ GitHub integration is seamless once repo is linked
- ✅ `vercel.json` auto-detection saves configuration time
- ✅ Vercel's git-push auto-deploy is excellent for continuous deployment

### What Was Challenging
- ⚠️ Vercel CLI login can be problematic in headless/non-interactive environments
- ⚠️ CLI auth errors not always clear about root cause
- ⚠️ First-time setup was blocked waiting for manual Vercel dashboard action

### Recommended Practices
1. **Always use dashboard for initial project linking** — faster, fewer auth issues
2. **Commit `.vercel/project.json`** — enables git-push auto-deploy
3. **Test builds locally before pushing** — catch issues early
4. **Monitor Vercel deployments** — dashboard is the single source of truth
5. **Keep `vercel.json` committed** — version control your Vercel config

---

## Maintenance

### Update Vercel Config
Edit `vercel.json` in repo root, then push:
```bash
git add vercel.json
git commit -m "chore: update vercel config"
git push origin master
```

### Manage Environment Variables
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add/edit variables there (do NOT commit secrets to git)
3. Redeploy to apply changes:
   - Dashboard: Redeploy button
   - CLI: `vercel --prod`
   - Git: Push to master

---

## Contact & Support

**Repository:** https://github.com/MatheusSimonaci/md-odontologia  
**Vercel Docs:** https://vercel.com/docs  
**Vercel Support:** https://vercel.com/support

**For deployment issues:**
1. Check Vercel dashboard build logs
2. Verify git changes are pushed
3. Review this guide's troubleshooting section
4. Contact Vercel support if infrastructure issue
