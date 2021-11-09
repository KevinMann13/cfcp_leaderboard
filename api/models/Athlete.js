module.exports = (sequelize, Sequelize) => {
    const Athlete = sequelize.define("athletes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });

    return Athlete;
  };