import joi from 'joi';
import regexVar from '../../util/regex-var';

async function formVal(req, res, next) {
  try {
    const schema = joi.object({
      fullname: joi.string().pattern(regexVar.nameRegex).required(),
      email: joi.string().email().required(),
      message: joi.string().required(),
    });
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export default formVal;
