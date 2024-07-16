
## Provisioning


Create a RDS MySQL

You can directly access the AWS RDS documentation by following these links

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html

https://docs.aws.amazon.com/rds/


Credentials.env file

The .env file is a plain text configuration file that stores environment variables for your Node.js application.
It contains environmental variables in a key-value pair format
When your Node.js application starts, you can use a package like dotenv to load these variables into the environment so that your application can access them


DB_HOST: This is the hostname or endpoint of your database server. For instance. your-database-instance.xxx.us-west-2.rds.amazonaws.com

DB_USER: The username to access the database.

DB_PASSWORD: The password corresponding to the DB_USER.

DB_NAME: The name of the database you want to connect to.

PORT: The port on which your Node.js application will listen


Packages.json

Create a new Node.js project by running npm init in your project directory.
it will initialize a new Node.js project and create a package.json
The package.json file contains metadata about your project and dependencies that are needed for your Node.js application
Then, please install the required dependencies in your project directory.
you can do it one by one or all together in one line 
npm install express mysql --save
npm install mysql --save
npm install body-parser --save
npm install dotenv --save
npm install express mysql body-parser dotenv --save
remember to run npm install in your project directory to ensure the changes take effect



Run the Node.js Application

node MySQL Connection.js



