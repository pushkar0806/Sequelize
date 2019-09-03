# Sequelize

```
Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
```

# Requirements
A. Install supporting driver, I will be using Postgres
```
npm install --save pg pg-hstore
```

# Setting up a connection
> To connect to the database, you must create a Sequelize instance. This can be > done by either passing the connection parameters separately to the Sequelize > constructor or by passing a single connection URI.
```
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@example.com:9999/DB_NAME');
```

# Testing the connection
We can use the ```.authenticate()``` function to test if the connection is OK:
```
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
```

# Model Instances Example
```
const Species = sequelize.define('species', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // options
});
```

