# GIT MARKDOWN

[Git Cheatsheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

[Git Cheatsheet 2](https://ndpsoftware.com/git-cheatsheet.html#loc=workspace;)

![Esquema](https://qph.fs.quoracdn.net/main-qimg-d151c0543baa145e6252c1ec95199963.webp)

## CREATE REPOSITORIES

- Create a new local repository:

```sh
$ git init [project-name]
```

## MAKE CHANGES

- List all new modified files to be commited:
```sh
$ git status
```

- Show file differences not yet stayed:
```sh
$ git diff
```

- Snapshots the file in preparation for versioning it:
```sh
$ git ad [file]
```

- Records file snapshots permanently in version history:
```sh
$ git commit -m "[descriptive message]"
```

## GROUP CHANGES

- List all local branches in the current repository:
```sh
$ git branch
```

- Creates a new branch:
```sh
$ git branch [branch-name]
```

- Switches to the specified branch and update the working directory:
```sh
$ git checkout [branch-name]
```

- Combines the specified branch's history into the current branch:
```sh
$ git merge[branch]
```

- Deletes the specified branch:
```sh
$ git branch -d [branch-name]
```

## REFACTOR FILENAMES

- Deletes the file from the working directory and stages deletion:
```sh
$ git rm [file]
```

## REVIEW HISTORY

- Lists version history for the current branch:
```sh
$ git log
```

## SYNCHRONIZE CHANGES

- Combines bookmark's branch into current local branch:
```sh
$ git merge [bookmark]/[branch]
```
----

git reset --hard HEAD (working space vuelve a última versión)

git checkout -b feature... (crear nueva rama y se mete en la nueva)

git add -A

borra carpeta --> rm -rf git/


Para actualizar la información:

git fetch upstream
git merge upstream/develop
git push

