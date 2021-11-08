'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkup = sequelize.define('checkup', {
    date: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.STRING
    },
    headSize: {
      type: DataTypes.STRING
    },
    observation: {
      type: DataTypes.STRING
    },
    test: {
      type: DataTypes.STRING
    },
    testResult: {
      type: DataTypes.STRING
    },
    medicineName: {
      type: DataTypes.STRING
    },
    medicineAmount: {
      type: DataTypes.STRING
    },
    dose: {
      type: DataTypes.STRING
    }
  });
  checkup.associate = function (models) {
    // associations can be defined here
    checkup.belongsTo(models.child);
  };
  return checkup;
};