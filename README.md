# PostgreSQL-Express-React-Node-Example

# Start Application:
- Start server:
  * $ npm run start-server
- Start react app:
  * cd into client
  * $ npm start

# How to create full stack repo and with create-react-app
- Create your applications directory and add a client and a server folder.
- cd into the client folder and run: **npx create-react-app .**
  * create-react-app will by default initialize git in the client folder. You are not able to have git in nested folders so we need to remove git from the client folder and add git to our applications repo.
- To remove git from client run: **rm -rf .git**
- cd into your applications main directory and run: **git init**

You should now be able to push your fullstack app to github

# PostgreSQL Commands
- Open postgresql shell in terminal
  * psql postgres
- Show databases:
  * \l
- Leave psql shell:
  * \l
- Use database:
  * \c databasename;
- Example create table:
  * CREATE TABLE demo (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP);
- Example insert into:
  * INSERT INTO demo (username, password, email, created_on, last_login)
    VALUES ('ViniB', 'boltman', 'vinibjazevich97@gmail.com', current_timestamp, current_timestamp);