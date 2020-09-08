getFoodImage = (type) => {
    switch (type) {
        case "emplatanados":
            return "assets/imgs/pizza.jpg"
        case "hamburguesas":
            return "assets/imgs/hamburguer.png"
        case "arepas":
            return "assets/imgs/gourmet.jpg"
        case "alitas":
            return "assets/imgs/alitas1_opt.jpg"
        case "mexicana":
            return "assets/imgs/gourmet.jpg"
        case "postres":
            return "assets/imgs/otros_port.jpg"
        case "promociones":
            return "assets/imgs/sale.jpg"
        case "regalos":
            return "assets/imgs/gp.jpg"
        default:
            return "assets/imgs/gourmet.jpg"
    }
}

module.exports = {
    getFoodImage
}