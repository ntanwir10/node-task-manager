const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMidlleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  return res
    .status(err.status)
    .json({ msg: "Something went wrong. Please try again later" });
};

module.exports = errorHandlerMidlleware;
