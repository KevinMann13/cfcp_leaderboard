module.exports = (sequelize, Sequelize) => {
  const Attendance = sequelize.define("attendance", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATE
    }
  })

  return Attendance;
};