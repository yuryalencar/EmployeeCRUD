# EmployeeCRUD
EmployeeCRUD is a simple system for create, read, update and delete employees

## 1. How to install (PROD)

> create a git empty repo

```
cd /var/www/html/BM/repo/
sudo git init --bare <ambiente>.git
cd <ambiente>.git/hooks/
sudo touch post-receive
sudo nano post-receive
```

> Ok, puts this content in the post-receive file:

```
#!/bin/sh
git --work-tree=/var/www/html/BM/<ambiente> --git-dir=/var/www/html/BM/repo/<ambiente>.git checkout -f
```

> Grants permission now:



## 2. How to install (DEV)

## 3. Technologies used for development
