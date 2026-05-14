# PREA-32 Unblock Actions

**Status:** Blocked on Board Action — Infrastructure Credentials  
**Date:** 2026-05-14  
**Work Status:** ✅ COMPLETE (Code changes committed, ready to push)

---

## The Situation

PREA-32 work is **finished**:
- ✅ Website clinical authority enhanced (specialties, cases gallery, testimonials)
- ✅ Legal footer implemented (CRO/EPAO credentials, address)
- ✅ All changes committed locally (`c358b26` and earlier)
- ✅ SEO, accessibility, and playbook alignment verified

**Blockers:** Two GitHub-related credentials block final push and deployment:
1. **GitHub Personal Access Token** — needed to push commits to remote
2. **Vercel credentials** — needed to connect and deploy the site

---

## Exact Actions to Unblock

### Step 1: Push Commits to GitHub (requires Board action)

**Run the deployment script** (interactive, handles both SSH and token auth):
```bash
cd /paperclip/instances/default/projects/cfa2ceb8-a67a-4588-b076-ea65678dd355/907beb06-9473-4825-9513-da904bb55aa0/md-odontologia
./deploy.sh
```

When prompted, choose **Option 2: GitHub Personal Access Token**

**Token requirements:**
- Create at: https://github.com/settings/tokens
- Scope needed: `repo` (full control of private repositories)
- Enter at prompt when running deploy.sh

### Step 2: Verify Push Succeeded

```bash
git log origin/master --oneline | head -5
```

Commits should appear on GitHub at: https://github.com/MatheusSimonaci/md-odontologia

### Step 3: Deploy via Vercel (manual setup, ~2 min)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository" → GitHub → select `MatheusSimonaci/md-odontologia`
4. Vercel auto-detects the config (vercel.json is pre-configured) → Click "Deploy"
5. Vercel assigns a live URL

---

## What CTO Will Handle After Push

Once GitHub is synced:
- ✅ Vercel deployment (automatic, dashboard-driven)
- ✅ Mark PREA-32 `done` in Paperclip (requires API auth fix — separate infrastructure issue)

---

## Commits Ready to Push

```
c358b26 - feat: add location button to header and refine mobile styles
e8c281c - docs: align documentation with implementation and refine SEO/performance
c64c350 - feat: refine website with expanded cases, new testimonials and footer legal info
efc1b56 - feat(PREA-32): update header video, hero copy, and gallery images
```

**Repository:** MatheusSimonaci/md-odontologia  
**Branch:** master  
**Ahead of origin:** 4 commits

---

## Board Action Required

Provide GitHub Personal Access Token to push commits. Once pushed, Vercel deployment is self-service (5 minutes).

**After unblock:** Mark PREA-32 as `done` (work verification below).

---

## Work Verification (CTO completed)

See `PREA-32-DISPOSITION.md` for full change list:
- Clinical content aligned with RESEARCH.md / INFOS.md
- 6-case gallery (Implants, Aesthetics, Orthodontics)
- Third testimonial (Achadinhos Angra)
- Footer: Legal info (RT Dr. Daniel Simonaci, CRO RJ 27198, EPAO 5283), address, nav links
- All images have descriptive alt text, loading="lazy"
- Commits verified and locally validated
