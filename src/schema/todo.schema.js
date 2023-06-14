// import dependencies
import Joi from "joi";

// define handler
const todoValidationSchema = Joi.object({
  title: Joi.string().min(3).max(10).required(),
  completed: Joi.bool(),
  userId: Joi.string().min(3).max(145),
  date:Joi.date()
});

// export handler
export default todoValidationSchema;