# Repàs accés GIT via SSH Keys
## @edt ASIX M06-ASO Curs 2021-2022

### Procediment:
 * Generar clau SSH
 * Copiar la clau pública dins el GIT (settings/SSH & GPG Keys)
 * Activar *ssh-agent*
 * Carregar la clau pertinent (la privada)
 * [ Verificar l'accés via SSH ]
 * [ Verificar que l'accés és per SSH i no HTTP ]
 * [ Si cal, establir remote usant SSH ]
 * Accedir al repositori desde la sessió amb *ssh-agent*

### Ordres:
```
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

```
ssh -T git@github.com
Hi edtasixm06! You've successfully authenticated, but GitHub does not provide shell access.

git remote -v
  origin    https://github.com/edtasixm06/ldap21 (fetch)
  origin    https://github.com/edtasixm06/ldap21 (push)

git remote set-url origin git@github.com:edtasixm06/ldap21
git remote -v
  origin    git@github.com:edtasixm06/ldap21 (fetch)
  origin    git@github.com:edtasixm06/ldap21 (push)
```

```
# Des de la mateixa sessió on s'ha fet el eval per carregar ssh-agent
git add .; git commit -m "prova" ; git push
```
# REVISAR
# https://platzi.com/tutoriales/1557-git-github/4067-configurar-llaves-ssh-en-git-y-github/?utm_source=google&utm_medium=paid&utm_campaign=14603491644&utm_adgroup=&utm_content=&gclid=CjwKCAjwzaSLBhBJEiwAJSRokirE230iPB7NILfvDGZuy2XNR5zgoZen3HpucP526DtilxVdNP_HLhoCsjEQAvD_BwE&gclsrc=aw.ds
