import Joi from "joi";

export const authSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "string.base": "email must be a string",
    "string.email": "email must be a valid email",
  }),
  password: Joi.string().min(6).max(100).required().messages({
    "string.base": "password must be a string",
    "string.min": "password must have at least 6 characters",
    "string.max": "password must have at most 100 characters",
  }),
});

const user = {
  email: " teste@gmail.com",
  password: "123456",
};

const result = authSchema.validate(user);
