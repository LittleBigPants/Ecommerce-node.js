How to run:
First you will need to install a few things

- [PostgresSQL](https://www.postgresql.org/download/)
- [Docker](https://docs.docker.com/desktop/install/windows-install/)

Once you have that done, you will need to [create a new database](https://www.postgresqltutorial.com/postgresql-administration/postgresql-create-database/) on postgres for this particular project and save its name into .env alongside the rest of the DB values

Then you should just run `npm run migrations:run` to create the tables and you should be ready to go
