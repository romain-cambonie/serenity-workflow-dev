# Postgre sql addon

Reference : [Official documentation](https://doc.scalingo.com/databases/postgresql/start)

## Plans and prices
As of 2022-05-28

![Addons ids and price](../assets/scalingo-postgresql-plans.png)

Reflexion sur comment faire en mode user friendly:
1er déploiement / migration de db de la production 
- Appeller un script de migration sur l'instance ? 
- Adminer ?
- ssh restore d'un dump
- one-liner avec la cli

Déploiement par features branches

# TODO
tuto local for initial prod with a dump bigger than 100M
get PROD_DB_URL avec le container scalingo cli
pg_restore --clean --if-exists --no-owner --no-privileges --no-comments --dbname PROD_DB_URL --file dump.pgsql


References used:
https://doc.scalingo.com/databases/postgresql/dump-restore