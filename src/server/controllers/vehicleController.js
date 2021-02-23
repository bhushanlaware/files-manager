
const vehiclesServices = require('../services/vehiclesServices')
const getAllVehicles = async (req, res, next) => {
  try {
    const result = await vehiclesServices.getAllVehicles();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(500);
  }
}

module.exports = {
  getAllVehicles,
}