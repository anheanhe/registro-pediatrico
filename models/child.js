'use strict';
module.exports = (sequelize, DataTypes) => {
  const child = sequelize.define('child', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    birthDate: {
      type: DataTypes.STRING
    },
    bloodType: {
      type: DataTypes.STRING
    },
    alergies: {
      type: DataTypes.STRING
    },
    diseases: {
      type: DataTypes.STRING
    }
  });
  child.associate = function (models) {
    // associations can be defined here
    child.belongsTo(models.user);
    child.hasMany(models.vaccine);
    child.hasMany(models.checkup);
  };
  return child;
};