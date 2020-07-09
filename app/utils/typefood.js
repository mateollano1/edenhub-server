getFoodType = (type) => {
    switch (type) {
        case "pizzas":
            return "0"
        case "hamburguesas":
            return "1"
        case "gourmet":
            return "2"
        case "alitas":
            return "3"
        case "mexicana":
            return "4"
        case "otros":
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