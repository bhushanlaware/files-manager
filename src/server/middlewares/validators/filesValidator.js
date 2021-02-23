const { check } = require('express-validator');
const validationHelper = require('../../libs/validate');
const errorMessages = require('../../utils/errorMessages');
const tracksSearchValidator = {
  checkParams: [
    check('start_tis')
      .exists()
      .not()
      .isEmpty()
      .isString()
      .withMessage(errorMessages.ValidationError),
    check('end_tis')
      .exists()
      .not()
      .isEmpty()
      .isInt()
      .withMessage(errorMessages.ValidationError),
    (req, res, next) => {
      validationHelper.validate(req, res, next);
    },
  ],
};

module.exports = { tracksSearchValidator };