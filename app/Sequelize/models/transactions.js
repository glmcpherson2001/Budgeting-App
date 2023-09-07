'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactions.init({
    transId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      unique: true,
      references:{
        model: 'Users',
        key: 'userId'
      },
      onDelete: 'CASCADE'
    },
    transactionName: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    transactionAmount: {
      allowNull: false, 
      type: DataTypes.DECIMAL(10, 2)
    },
    transactionCategory:{
      allowNull: false,
      type: DataTypes.STRING
    },
    transactionSubCategory: {
      type: DataTypes.STRING
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};