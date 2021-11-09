module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("teams", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      capitan_name: {
        type: Sequelize.STRING
      }
    });
   
    return Team;
  };