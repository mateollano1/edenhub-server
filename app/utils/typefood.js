getFoodType = (type) => {
    switch (type) {
        case "emplatanados":
            return "0"
        case "hamburguesas":
            return "1"
        case "arepas":
            return "2"
        case "alitas":
            return "3"
        case "mexicana":
            return "4"
        case "postres":
            return "5"
        case "promociones":
            return "6"
        case "regalos":
            return "7"
        default:
            return "0"
    }
}

module.exports = {
    getFoodType
}