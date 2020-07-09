getFoodImage = (type) => {
    switch (type) {
        case "pizzas":
            return "assets/imgs/pizza.jpg"
        case "hamburguesas":
            return "assets/imgs/hamburguer.png"
        case "gourmet":
            return "assets/imgs/gourmet.jpg"
        case "alitas":
            return "assets/imgs/gourmet.jpg"
        case "mexicana":
            return "assets/imgs/gourmet.jpg"
        case "otros":
            return "assets/imgs/gourmet.jpg"
        case "promociones":
            return "assets/imgs/gourmet.jpg"
        case "regalos":
            return "assets/imgs/gourmet.jpg"
        default:
            return "assets/imgs/gourmet.jpg"
    }
}

module.exports = {
    getFoodImage
}