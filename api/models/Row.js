module.exports = (sequelize, Sequelize) => {
  const Row = sequelize.define("row", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATE
    },
    meters: {
      type: Sequelize.INTEGER
    },
    proof_img: {
      type: Sequelize.STRING
    },
  })

  return Row;
};