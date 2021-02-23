
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      license: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      engineNumber: {
        type: Sequelize.STRING
      },
      chasisNumber: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vehicles');
  }
};