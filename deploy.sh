#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

REPO_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "${YELLOW}MD Odontologia Digital — Deployment Script${NC}"
echo "==============================================="
echo ""

# Check if commits are ready
echo "Checking git status..."
cd "$REPO_PATH"

COMMITS_AHEAD=$(git log origin/master..HEAD --oneline 2>/dev/null | wc -l)
if [ "$COMMITS_AHEAD" -eq 0 ]; then
    echo -e "${RED}✗ No commits to push${NC}"
    exit 1
fi

echo -e "${GREEN}✓ $COMMITS_AHEAD commits ready to push${NC}"
git log origin/master..HEAD --oneline

echo ""
echo "Choose authentication method:"
echo "1) SSH private key (~/.ssh/id_ed25519)"
echo "2) GitHub Personal Access Token"
echo "3) Exit"
echo ""

read -p "Select option (1-3): " CHOICE

case $CHOICE in
    1)
        echo ""
        echo "Using SSH authentication..."

        if [ ! -f ~/.ssh/id_ed25519 ]; then
            echo -e "${RED}✗ SSH key not found at ~/.ssh/id_ed25519${NC}"
            echo ""
            echo "To provide your SSH key:"
            echo "  1. Copy your private key: cat /path/to/id_ed25519"
            echo "  2. Create the file: nano ~/.ssh/id_ed25519"
            echo "  3. Paste the key and save"
            echo "  4. Set permissions: chmod 600 ~/.ssh/id_ed25519"
            exit 1
        fi

        if ! ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts 2>/dev/null; then
            true
        fi

        echo "Pushing commits to GitHub..."
        git push origin master
        ;;
    2)
        echo ""
        read -sp "Enter your GitHub Personal Access Token: " TOKEN
        echo ""

        if [ -z "$TOKEN" ]; then
            echo -e "${RED}✗ Token is required${NC}"
            exit 1
        fi

        echo "Pushing commits to GitHub..."
        git remote set-url origin "https://${TOKEN}@github.com/MatheusSimonaci/md-odontologia.git"
        git push origin master

        # Restore SSH remote
        git remote set-url origin "git@github.com:MatheusSimonaci/md-odontologia.git"
        ;;
    3)
        echo "Exiting."
        exit 0
        ;;
    *)
        echo -e "${RED}✗ Invalid option${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✓ Commits pushed successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Create new project and import GitHub repository"
echo "3. Select MatheusSimonaci/md-odontologia"
echo "4. Vercel will automatically deploy"
echo ""
echo "Deployment guide: $REPO_PATH/DEPLOY.md"
