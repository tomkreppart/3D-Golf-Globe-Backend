module.exports = {

    development: {
      client: "pg",
      connection: {
        database: process.env.DATABASE_URL || 'golf_globe',
      }
    },
    production: {
      client: "postgresql",
      connection: process.env.DATABASE_URL
    }
};
