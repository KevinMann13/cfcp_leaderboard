module.exports = {
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