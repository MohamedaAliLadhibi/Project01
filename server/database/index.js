const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.json')
const sequelize = new Sequelize('project01', config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql',
}); 

const users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER, // Corrected data type to INTEGER
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }
);

sequelize.sync({ alter: false })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to synchronize the models:', error);
  });

module.exports = {
  users
};
