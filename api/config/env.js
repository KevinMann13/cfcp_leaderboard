development_credentials = {
  HOST: "db",
  USER: "root",
  PASSWORD: "example",
  DB: "comp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

production_credentials = {
  HOST: process.env.RDS_HOSTNAME,
  USER: process.env.RDS_USERNAME,
  PASSWORD: process.env.RDS_PASSWORD,
  DB: process.env.RDS_DB_NAME,
  PORT: process.env.RDS_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

if (process.env.NODE_ENV === "development") {
  module.exports = development_credentials;
} else {
  module.exports = production_credentials;
}