const { validationResult } = require('express-validator');
const httpStatusCodes = require('../utils/httpStatusCodes');

const validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (req.body.status === 3 && !errors.isEmpty()) {
    return res
      .status(httpStatusCodes.UnprocessableEntity)
      .json({ errors: errors.mapped() });
  } else {
    return next();
  }
};

module.exports = {
  validate,
};