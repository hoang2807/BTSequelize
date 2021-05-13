const { User } = require("../model");

//register
exports.createUser = async(body) => {
    try {
        const newUser = await User.create({
            username: body.username,
            password: body.password,
            fullname: body.fullname,
            age: body.age,
            email: body.email,
            jobId: body.jobId,
        });
        return newUser;
    } catch (error) {}
};
//login
exports.loginUser = async(body) => {
    try {
        let mess = "Dang nhap that bai";
        const loginUser = await User.findOne({
            where: { username: body.username },
        });
        if (!loginUser) return mess;
        else if (loginUser.password !== body.password) return mess;
        return (mess = "Dang nhap thanh cong");
    } catch (error) {}
};

exports.updateUser = async(body) => {
    try {
        const { username, password, fullName, age, email, jobID } = body;
        const result = await User.update({ password, fullName, age, email, jobID }, { where: { username } });
        return result;
    } catch (error) {}
};
exports.deleteUser = async(userId) => {
    try {
        const result = await User.destroy({ where: { id: userId } });
        return result;
    } catch (error) {}
};