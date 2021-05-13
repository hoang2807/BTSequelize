const { Op } = require("sequelize");
const { Job } = require("../model");
const { User } = require("../model");
exports.getJob = async({ page = 1, limit = 1, key = "" }) => {
    try {
        const listJob = await Job.findAll({
            where: {
                title: {
                    [Op.substring]: key,
                },
            },
            limit: Number(limit),
            offset: Number((page - 1) * limit),
            include: [{ model: User }],
        });
        return listJob;
    } catch (error) {}
};
exports.createJob = async(body) => {
    try {
        const newJob = await Job.create({
            title: body.title,
            salary: body.salary,
            address: body.address,
        });
        return newJob;
    } catch (error) {}
};
exports.updateJob = async(body) => {
    try {
        const { id, title, salary, address } = body;
        const result = await Job.update({ title, salary, address }, { where: { id } });
        return result;
    } catch (error) {}
};
exports.deleteJob = async(jobId) => {
    try {
        const result = await Job.destroy({ where: { id: jobId } });
        return result;
    } catch (error) {}
};