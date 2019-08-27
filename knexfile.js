// Knex needs configuration info including:
// client adaptor
// the database we are connecting to
// where the function to our seed database lives

// this checks the environment and defaults to 'development' if undefined

const ENV = process.env.NODE_ENV || "development";

// config info
const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

// config info
const customConfig = {
  development: {
    connection: {
      // sql database:
      database: "nc_news"
      // username,
      // password
    }
  },
  test: {
    connection: {
      // sql test database:
      database: "nc_news_test"
      // username,
      // password
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };

// why aren't we exporting as below
// module.exports = dbConfig[ENV];
