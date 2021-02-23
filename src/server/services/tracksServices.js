const { Op } = require('sequelize');
const Track = require("../db/models").Track;
const Vehicle = require("../db/models").Vehicle;

const getVehiclesForTime = async (startTime, endTime) => {
    const vehicleTracks = await Track.findAll({
        where: {
            time: {
                [Op.and]: { [Op.gte]: startTime, [Op.lte]: endTime }
            }
        },
        include: [
            { model: Vehicle, as: "vehicle" },
        ],
        // attributes:{exclude:['vehicle.modal']}
    });
    // console.log(products)
    return vehicleTracks;
};
const getVehicleActivity = async (vehicleId, startDate, endDate) => {
    const vehicles = await Track.findAll({
        where: {
            vehicleId,
            time: {
                [Op.and]: { [Op.gte]: startDate, [Op.lte]: endDate }
            }
        }
    });
    // console.log(products)
    return vehicles;
};
module.exports = {
    getVehiclesForTime,
    getVehicleActivity,
}