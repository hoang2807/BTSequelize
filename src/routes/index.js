const route = require("express").Router();

const UserRoute = require("./user");
const JobRoute = require("./job");
route.use(UserRoute);
route.use(JobRoute);
module.exports = route;