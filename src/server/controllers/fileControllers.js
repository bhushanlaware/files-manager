const fileServices = require('../services/fileServices')
const getFilesCreatedIn = async (req, res, next) => {
  try {
    const files = await fileServices.getFilesCreatedIn(req.query.start_tis, req.query.end_tis)
    res.send(files);
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
const getAllFiles = async (req, res, next) => {
  try {
    const result = await fileServices.getAllFiles();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}
module.exports = {
  getFilesCreatedIn,
  getAllFiles,
}