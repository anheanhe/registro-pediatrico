'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    dni: {
      type: DataTypes.STRING,
      unique: true
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.child);
  };
  return user;
};