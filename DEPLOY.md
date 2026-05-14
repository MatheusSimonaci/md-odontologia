# MD Odontologia Digital — Deployment Guide

## Current Status
✅ Code is ready to deploy:
- 2 commits staged locally (553d562, b71f375)
- vercel.json properly configured
- Static HTML site ready in `projects/md-odontologia-digital/`

## Authentication Blocker
The SSH key provided (`GITHUB_SSH_KEY`) contains only the **public key**, not the private key needed for GitHub authentication. To push commits, choose one of these options:

## Option A: SSH Private Key (Recommended)
If you have the SSH private key locally:

```bash
# Place your SSH private key in ~/.ssh/id_ed25519
# Ensure proper permissions:
chmod 600 ~/.ssh/id_ed25519

# Then push commits:
cd /paperclip/instances/default/projects/cfa2ceb8-a67a-4588-b076-ea65678dd355/907beb06-9473-4825-9513-da904bb55aa0/md-odontologia
git push origin master
```

## Option B: GitHub Personal Access Token
If you have a GitHub Personal Access Token:

```bash
# Set up git to use the token:
git remote set-url origin https://YOUR_GITHUB_TOKEN@github.com/MatheusSimonaci/md-odontologia.git

# Push commits:
git push origin master

# Verify push succeeded:
git log origin/master --oneline | head -5
```

To create a token: https://github.com/settings/tokens
- Select scopes: `repo` (full control of private repositories)

## Option C: Copy Private Key from Another Machine
If your private key exists on another machine:

```bash
# On the machine with the key:
cat ~/.ssh/id_ed25519

# Copy the output, then on this machine:
# Create the file and paste:
nano ~/.ssh/id_ed25519
# Then run: chmod 600 ~/.ssh/id_ed25519
```

## After Push: Vercel Deployment

Once commits are pushed to GitHub, set up the Vercel project:

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Connect GitHub if needed and select `MatheusSimonaci/md-odontologia`
5. Project settings:
   - **Framework:** "Other" (None)
   - **Build Command:** Leave blank (static site)
   - **Output Directory:** Already configured in vercel.json
   - **Install Command:** Leave blank
6. Click "Deploy"

Vercel will automatically deploy from the repo and assign a live URL.

## Verification

After deployment, verify:
```bash
# Check commits are on GitHub:
git log origin/master --oneline | head -5

# Check Vercel deployment (once linked):
# Dashboard: https://vercel.com/dashboard
```

## Commit Details
- **553d562**: Fix Vercel deployment: use outputDirectory instead of legacy builds+routes
- **b71f375**: Add md-odontologia-digital index.html and Vercel config

These commits contain the vercel.json configuration and the complete static site.
