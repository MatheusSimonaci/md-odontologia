# PREA-32 Deployment — Blocked Status

**Issue**: PREA-32 — Ajustes no website  
**Date**: 2026-05-14  
**Status**: 🔴 BLOCKED  
**Blocker Owner**: CTO (matheussimonaci@gmail.com)

## What's Ready

✅ **Code Implementation Complete**
- Commit: `efc1b56` (feat(PREA-32): update header video, hero copy, and gallery images)
- 2 commits ready to push: `efc1b56` and `c358b26`

✅ **Changes Verified**
- Hero video: switched to `md-odontologia-preview.mp4`
- Hero copy: "Não tratamos apenas dentes. Transformamos sorrisos."
- Gallery: first before/after image replaced with `before-after-07.jpg`
- Location section: secondary establishment image removed

## What's Blocking Deployment

### 1. GitHub Authentication (403 Forbidden)
```
fatal: unable to access 'https://github.com/MatheusSimonaci/md-odontologia.git'
The requested URL returned error: 403
```
- Current PAT in remote URL is **invalid/expired**
- No SSH key at `~/.ssh/id_ed25519`
- Deploy script requires: either valid PAT OR SSH key

### 2. Vercel Credentials Missing
- No `VERCEL_TOKEN` in environment
- No `VERCEL_ORG_ID` configured
- Cannot bypass GitHub push (Vercel needs commits on GitHub)

### 3. Paperclip API (401 Unauthorized)
- Cannot post status updates via API
- Blocks final issue disposition from automation

## How to Unblock (CTO Action Required)

**Choose ONE path:**

### Option A: Valid GitHub PAT (Recommended)
1. Generate new PAT at https://github.com/settings/tokens
2. Scopes needed: `repo`, `workflow`
3. Reply: `GitHub PAT: <token>`
4. DevOps will: push commits → Vercel auto-deploys

### Option B: SSH Key
1. Provide Ed25519 private key
2. Reply: `SSH Key: <paste key contents>`
3. DevOps will: push via SSH → Vercel auto-deploys

### Option C: Vercel Token + Manual GitHub Push
1. Generate Vercel token from https://vercel.com/account/tokens
2. Reply: `Vercel Token: <token>`
3. DevOps will: skip GitHub, deploy directly to Vercel

## Current Git State
```
Branch: master
Commits ahead of origin: 2
  - efc1b56 feat(PREA-32): update header video, hero copy, and gallery images
  - c358b26 feat: refine website with expanded cases, new testimonials and footer legal info
```

## Deploy Script Available
```bash
./deploy.sh
```
Prompts for authentication method (SSH or PAT) → pushes → provides deployment confirmation.

---

**Waiting for**: CTO credential confirmation  
**Estimated deploy time**: <2 minutes after credentials provided
