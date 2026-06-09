# Git Commands Guide

This document contains a list of 10 essential Git commands along with their explanations used during this web development internship.

---

### 1. git init
* **Explanation:** Initializes a brand new, empty local Git repository in the current folder workspace.
* **Usage:** `git init`

### 2. git config
* **Explanation:** Configures user information like email and username globally across your local environment.
* **Usage:** `git config --global user.email "your.email@example.com"`

### 3. git clone
* **Explanation:** Creates a local working copy of a remote GitHub repository.
* **Usage:** `git clone <repository_url>`

### 4. git status
* **Explanation:** Displays the state of the working directory and the staging area, showing modified, untracked, or staged files.
* **Usage:** `git status`

### 5. git add
* **Explanation:** Adds modified or newly created files to the staging area, preparing them to be committed.
* **Usage:** `git add .` (Adds all files) or `git add <file_name>`

### 6. git commit
* **Explanation:** Records and saves the staged snapshots permanently into the version history with a descriptive log message.
* **Usage:** `git commit -m "Your descriptive commit message"`

### 7. git branch
* **Explanation:** Used to list, create, or delete branches in your repository. Adding `-M main` renames the default branch to main.
* **Usage:** `git branch -M main`

### 8. git remote
* **Explanation:** Manages links to remote repositories (like GitHub). It connects your local repository to the cloud server.
* **Usage:** `git remote add origin <repository_url>`

### 9. git push
* **Explanation:** Uploads your local repository commits and changes to the remote repository on GitHub.
* **Usage:** `git push -u origin main`

### 10. git rm
* **Explanation:** Removes files or folders from your working directory and tracks the deletion in version control. Adding `--cached` removes it only from GitHub but keeps it on your computer.
* **Usage:** `git rm -r --cached <folder_name>`