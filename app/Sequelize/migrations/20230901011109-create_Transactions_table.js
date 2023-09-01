'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions',{
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt:{
        allowNull: false, 
        type: DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions')
  }
};
