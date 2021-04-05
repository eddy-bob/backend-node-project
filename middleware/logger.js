// set a middle ware so that when ever i make a command,it runs
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.originalUrl}`);
  next();
};
module.exports=logger