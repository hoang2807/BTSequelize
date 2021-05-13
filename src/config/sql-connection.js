const Sequelize = require("sequelize");
const sequelize = new Sequelize("BTSQL", "root", "thuvienmysql", {
    host: "localhost",
    dialect: "mysql",
    logging: true,
    sync: true,
});

sequelize.sync();
module.exports = sequelize;