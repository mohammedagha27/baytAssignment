const Joi = require('joi');

const signInSchema = Joi.object({
  email: Joi.string().email().trim(true).required(),
  password: Joi.string().alphanum().min(6).required(),
});
const signInValidation = (dataObj) => signInSchema.validateAsync(dataObj);

module.exports = signInValidation;
