const dbConfig = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    define: {
        timestamps: false,
        underscored: true
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Team = require("../models/Team.js")(sequelize, Sequelize);
db.Athlete = require("../models/Athlete.js")(sequelize, Sequelize);

db.Athlete.belongsTo(db.Team, {as: 'Team'});
db.Team.hasMany(db.Athlete, {as: 'Athletes'})

module.exports = db;