---
title: Cheat Sheet
description: A quick reference table of the most common Git commands.
---

These are the commands you'll use most often. It's recommended to keep this open in a tab while you work, especially when starting.

<Aside type="caution">
  These are not in any particular order. Trying to use these in order is likely to break things, as they're all for different things.
</Aside>

## Everyday Commands

| Command | What it does |
|---|---|
| `git status` | See what files have changed since your last commit |
| `git log --oneline` | See a short history of recent commits |
| `git diff` | See exactly what lines changed in your files |
| `git branch` | See what branch you're on |

## Starting Work

| Command | What it does |
|---|---|
| `git checkout main` | Switch to the main branch |
| `git pull` | Download the latest changes from GitHub |
| `git checkout -b name` | Create a new branch and switch to it |
| `git checkout name` | Switch to an existing branch |

## Saving Your Work

| Command | What it does |
|---|---|
| `git add .` | Stage all changed files for a commit |
| `git add filename` | Stage a specific file only |
| `git commit -m "msg"` | Commit your changes with a description |
| `git push origin name` | Upload your branch to GitHub |

## Undoing Things

| Command | What it does |
|---|---|
| `git reset --soft HEAD~1` | Undo last commit, keep changes |
| `git restore filename` | Discard changes to a specific file |
| `git stash` | Temporarily shelve all changes |
| `git stash pop` | Restore your shelved changes |

## The Full Workflow (Quick Version)

```sh
# Start fresh
git checkout main
git pull

# Create your branch
git checkout -b your-name/what-youre-doing

# ... do your work ...

# Save and upload
git add .
git commit -m "Describe what you did"
git push origin your-name/what-youre-doing

# Then open a Pull Request on github.com
```
