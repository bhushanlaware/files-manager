const { Op } = require('sequelize');
const File = require("../db/models").File;

const getFilesCreatedIn = async (startTime, endTime) => {
    const files = await File.findAll({
        where: {
            createdAt: {
                [Op.and]: { [Op.gte]: startTime, [Op.lte]: endTime }
            }
        },
    });
    return files;
};
const getAllFiles = async () => {
    const files = await File.findAll({});
    return files;
};
module.exports = {
    getFilesCreatedIn,
    getAllFiles,
}