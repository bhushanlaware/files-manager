module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [
      {
        license: 'ADTEST1',
        model: 'MITSUBISHI',
        engineNumber: '1DZ0037452',
        chasisNumber: '839F23-23616',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        license: 'ADTEST1',
        model: 'TOYOTA',
        engineNumber: '1HQ0039202',
        chasisNumber: '606F30-98714',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};