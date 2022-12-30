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
    if (data.role)
        user.role = data.role;

    return user;
}