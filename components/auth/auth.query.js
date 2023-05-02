const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid")
const passwordHash = require("password-hash");
const UserModel = require("./../user/userModels");
const userMapping = require("./../../helpers/userMapping");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
        user: "shresthasabeen016@gmail.com",
        pass: 'ssmixcupelyugsyn',
    },
});

function signUp(data) {
    return new Promise(function (resolve, reject) {

        const currentDate = new Date().getTime();
        const sevenDay = 1000 * 60 * 60 * 24 * 7;

        data.password = passwordHash.generate(data.password);
        const newUser = new UserModel({});
        const mappednewUser = userMapping(newUser, data);

        mappednewUser.emailVerficationToken = uuidv4();
        mappednewUser.emailVerficationTokenExpire = currentDate + sevenDay;
        mappednewUser.save(function (err, createdUser) {
            if (err) {
                return reject(err);
            }
            resolve(createdUser)
            transporter.sendMail({
                from: 'From Nodemailer <foo@example.com>',
                to: "shresthasabeen016@gmail.com",
                subject: "Hello ✔ Hello ✔ Hello ✔",
                text: "Hello Express",
                html: `
                <h1>Hello world?</h1>
                <p>Please Active Your Account by clicking this link <a href="http://localhost:3000/active-email/${createdUser.emailVerficationToken}">Click Link</a></p>`,
            })
        });
    });
}

function signIn(username) {
    return new Promise(function (resolve, reject) {
        UserModel.findOne({ username }, function (err, user) {
            if (err) {
                return reject(err);
            }
            if (!user) {
                return reject({ msg: "User Not Found !!!" })
            }
            resolve(user);
        })
    })
}

function emailVerfication(token) {
    const currentDate = new Date().getTime();
    return new Promise(function (resolve, reject) {
        UserModel.findOne({ emailVerficationToken: token }, function (err, user) {
            if (err) {
                return reject(err);
            }
            if (!user) {
                return reject({ msg: "User with this Email Not Found !!!" })
            }
            console.log("Unverified User", user)
            if (user.emailVerficationTokenExpire < currentDate) {
                return reject({ msg: "Token is Expired" })
            }
            user.isEmailVerified = true;
            user.save(function (err, verifiedEmailUser) {
                if (err) {
                    return reject(err);
                }
                resolve(verifiedEmailUser);
                console.log("Verified User", verifiedEmailUser)
            })

        })
    })
}

module.exports = {
    signUp,
    signIn,
    emailVerfication
}