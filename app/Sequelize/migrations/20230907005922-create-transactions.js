'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      transId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.STRING,
      },
      transactionAmount: {
        allowNull: false, 
        type: Sequelize.DECIMAL(10, 2)
      },
      transactionCategory:{
        allowNull: false,
        type: Sequelize.STRING
      },
      transactionSubCategory: {
        type: Sequelize.STRING
      },
      transactionDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};