const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);


const createCustomerSchema = Joi.object({
  email: email.required(),
  password: password.required(),

});

const updateCustomerSchema = Joi.object({
  email: email,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
