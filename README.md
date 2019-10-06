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

BACKEND:
*  Spring boot
*  Spring tool suite (for VSCODE)
*  Spring Initializr (for create a spring project)
*  Postman (for test API)
*  MySQL Community Server
*  Mocky.io https://www.mocky.io (For make API returns and implement front-end)

## 4. Next Steps

BACKEND
*  Use of the HATEOAS
