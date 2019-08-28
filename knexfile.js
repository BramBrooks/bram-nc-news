// Knexfile - contains our database configuration info

// checks environment and defaults to 'development' if undefined

const ENV = process.env.NODE_ENV || "development";

// connection Objects
const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "nc_news"
      // username,
      // password
    }
  },
  test: {
    connection: {
      database: "nc_news_test"
      // username,
      // password
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
