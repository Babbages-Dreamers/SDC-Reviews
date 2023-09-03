
module.exports = (req, res, next) => {
  console.log(`${req.method} Request Received At ${req.url}`);

  next();
}