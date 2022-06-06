# Postgre sql addon

Reference : [Official documentation](https://doc.scalingo.com/databases/postgresql/start)

## Plans and prices
As of 2022-05-28

![Addons ids and price](../assets/scalingo-postgresql-plans.png)

Reflexion sur comment faire:
1er déploiement / migration de db de la production 
- Appeller un script de migration sur l'instance ? 
- Adminer ?
- ssh restore d'un dump

Déploiement par features branches
- soit mig et empty db :/

- fixtures (lourd à maintenir)

- tunnel entre prod et l'instance 
  - Nécessite de setup la var de db de prod dans le repos
    - https://docs.github.com/en/rest/actions/secrets#create-or-update-a-repository-secret
      - secret encodé par lib sodium
        - nouveau container cli libsodium (et ou avec la gh api) ? / Pb de sécu ? : Difficile à découpler sur la ci
    - manuellement :puke:
    - 
- dump / restore
  - on se connecte à la prod en one-off
  - on dump
  - on execute un one-off de l'autre application avec le dump en param
  - on restore
  - ...
  - profit ?
  - pb: ne marche pas pour les archives > 100Mo

test :
démarrer docker-cli avec le ficher => volume 
démarrer scalingo one-off avec le dump 
install pgsql 
restore en donnant l'url en param


