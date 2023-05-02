module.exports = function (user, data) {
    if (data.name)
        user.name = data.name.trim();
    if (data.email)
        user.email = data.email;
    if (data.username)
        user.username = data.username;
    if (data.password)
        user.password = data.password;
    if (data.phone)
        user.phone = data.phone;
    if (data.birthDate)
        user.birthDate = data.birthDate;
    if (data.isEmailVerified)
        user.isEmailVerified = data.isEmailVerified;
    if (data.emailVerficationToken)
        user.emailVerficationToken = data.emailVerficationToken;
    if (data.emailVerficationTokenExpire)
        user.emailVerficationTokenExpire = data.emailVerficationTokenExpire;
    if (data.resetPasswordToken)
        user.resetPasswordToken = data.resetPasswordToken;
    if (data.resetPasswordTokenExpire)
        user.resetPasswordTokenExpire = data.resetPasswordTokenExpire;

    return user;
}