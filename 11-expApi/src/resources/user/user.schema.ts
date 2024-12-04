import Joi from "joi";
import { UserTypes } from "../userType/userType.constants";

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  userTypeId: Joi.valid(UserTypes.ADMIN, UserTypes.USER).required(),
});

export default userSchema;
