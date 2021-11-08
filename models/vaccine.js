'use strict';
module.exports = (sequelize, DataTypes) => {
  const vaccine = sequelize.define('vaccine', {
    name: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    place: {
      type: DataTypes.STRING
    }
  });
  vaccine.associate = function (models) {
    // associations can be defined here
    vaccine.belongsTo(models.child);
  };
  return vaccine;
};