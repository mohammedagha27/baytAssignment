const Joi = require('joi');

const signUpSchema = Joi.object({
  email: Joi.string().email().trim(true).required(),
  username: Joi.string().required(),
  password: Joi.string().alphanum().min(6).required(),
});
const signUpValidation = (dataObj) => signUpSchema.validateAsync(dataObj);

module.exports = signUpValidation;
