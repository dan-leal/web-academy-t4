import Joi from "joi";

export const productSchema = Joi.object().keys({
  name: Joi.string().min(3).max(100).required().messages({
    "string.base": "name must be a string",
    "string.min": "name must have at least 3 characters",
    "string.max": "name must have at most 100 characters",
  }),
  price: Joi.number().required().messages({
    "number.base": "price must be a number",
  }),
  stockQuantity: Joi.number().integer().required().messages({
    "number.base": "stockQuantity must be a number",
    "number.integer": "stockQuantity must be an integer",
  }),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

export const productSchemaID = Joi.object().keys({
  id: Joi.string().uuid().required().messages({
    "string.base": "id must be a string",
    "string.uuid": "id must be a valid UUID",
  }),
});

const produto = {
  name: "produto 1",
  price: 10.13,
  stockQuantity: 10,
  createdAt: new Date(),
};

const result = productSchema.validate(produto);
