const route = require("express").Router();
const { UserController } = require("../controller");

route.post("/user/register", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await UserController.createUser(body);
    res.json({
        data,
    });
});
route.post("/user/login", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await UserController.loginUser(body);
    res.json({
        data,
    });
});

route.put("/user/update", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await UserController.updateUser(body);
    res.json({
        data,
    });
});
route.delete("/user/:userId", async(req, res) => {
    const userId = req.params.userId;
    const data = await UserController.deleteUser(userId);
    res.json({
        data,
    });
});
module.exports = route;