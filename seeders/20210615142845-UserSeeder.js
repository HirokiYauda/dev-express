'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'TEST1',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TEST2',
        age: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TEST3',
        age: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
