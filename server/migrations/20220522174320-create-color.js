"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "colors",
      { id: Sequelize.INTEGER },
      { name: Sequelize.STRING }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("colors");
  },
};
