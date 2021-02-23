const errorMessages = {
  UnprocessableEntity: 'Request cannot be processed.',
  ValidationError: 'Invalid/Null value',
  fileTypeError: 'Only PDF files can be uploaded',
  authorizationError: 'Only admins are authorized to perform this operation.',
  guidesUploadAuthorizationError:
    'Only super admins are authorized to perform this operation.',
  syncPayloadErr: 'Request payload should be an array.',
};

module.exports = errorMessages;