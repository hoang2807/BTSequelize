const route = require("express").Router();
const { JobController } = require("../controller");
route.put("/job", async(req, res) => {
    const body = req.body;
    const data = await JobController.updateJob(body);
    res.json({
        data,
    });
});
route.post("/job", async(req, res) => {
    const body = req.body;
    const data = await JobController.createJob(body);
    res.json({
        data,
    });
});
route.delete("/job/:jobId", async(req, res) => {
    const jobId = req.params.jobId;
    const data = await JobController.deleteJob(jobId);
    res.json({
        data,
    });
});
route.get("/job", async(req, res) => {
    const query = req.query;
    console.log(query);
    const data = await JobController.getJob(query);
    res.json({
        data,
    });
});
module.exports = route;