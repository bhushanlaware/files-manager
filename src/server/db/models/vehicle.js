const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Track, {
        as: "track",
        foreignKey: "vehicleId",
        onDelete: "cascade",
      });
    }
  };
  Vehicle.init({
    license: DataTypes.STRING,
    model: DataTypes.STRING,
    engineNumber: DataTypes.STRING,
    chasisNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};