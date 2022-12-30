function askforMoney(amount) {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve(amount);
        }
        reject("I have not enough Money")
    })
}

function buyPhone(phone) {
    return new Promise(function (resolve, reject) {
        if (phone) {
            resolve(phone)
        }
        reject("Phone below 20k is not availabe!!!")
    })
}

function installapps(apps) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (true) {
                resolve(apps)
            }
            reject("Plaese login into PlayStore")
        }, 5000)
    })
}

askforMoney("20k")
    .then(function (data) {
        console.log("I have ", data, "to buy a New Phone");
        return buyPhone("SAMSUNG");
    })
    .then(function (data) {
        console.log("I have bought brand new", data, "Phone");
        return installapps("PUB-G")
    })
    .then(function (data) {
        console.log(data, "has Apps Installed Successfuly!!!")
    })
    .catch(function (err) {
        console.log(err);
    })
