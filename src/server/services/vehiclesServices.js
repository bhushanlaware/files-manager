const Vehicle = require("../db/models").Vehicle;

const getAllVehicles = async () => {
    const vehicles = await Vehicle.findAll();
    return vehicles;
};
module.exports = {
    getAllVehicles,
  }