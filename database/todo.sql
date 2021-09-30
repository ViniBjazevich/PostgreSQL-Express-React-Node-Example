CREATE TABLE todo (
	id serial PRIMARY KEY,
	todo VARCHAR ( 50 ) UNIQUE NOT NULL
);

INSERT INTO todo (todo)
    VALUES ('Take out trash');

/*
PostgreSQL Commands
- Open postgresql shell in terminal
  $ psql postgres

- Show databases:
  postgres=# \l

- Leave psql shell:
  postgres=# \q

- Use database:
  postgres=# \c databasename;
*/