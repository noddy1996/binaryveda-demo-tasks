export default function getIcon(type) {
    switch (type) {
        case "logo":
            return require("../assets/imgs/logo.png");
            case "logo1":
                return require("../assets/imgs/logo1.png")
            case "loginImg":
                return require("../assets/imgs/loginImg.png")
            case "fb":
                return require("../assets/imgs/fb.png")
            case "insta":
                return require("../assets/imgs/insta.png")
            case "arrowRight":
                return require("../assets/icons/arrowRight.png")
            case "arrowRightBlue":
                return require("../assets/icons/arrowRightBlue.png")
            case "book":
                return require("../assets/icons/book.png")
            case "flag":
                return require("../assets/icons/flag.png")
            case "link":
                return require("../assets/icons/link.png")
            case "man":
                return require("../assets/icons/man.png")
            case "mobile":
                return require("../assets/icons/mobile.png")
            case "mouse":
                return require("../assets/icons/mouse.png")
            case "star":
                return require("../assets/icons/star.png")
            case "wii":
                return require("../assets/icons/wii.png")
            case "copyright":
                return require("../assets/icons/copyright.png")
            case "logo2":
                return require("../assets/icons/profile/logo.png")
            case "dm":
                return require("../assets/icons/profile/dm.png")
            case "edit":
                return require("../assets/icons/profile/edit.png")
            case "exhibitions":
                return require("../assets/icons/profile/exhibitions.png")
            case "heart":
                return require("../assets/icons/profile/heart.png")
            case "menu":
                return require("../assets/icons/profile/menu.png")
            case "plus":
                return require("../assets/icons/profile/plus.png")
            case "profile":
                return require("../assets/icons/profile/profile.png")
            case "revenue":
                return require("../assets/icons/profile/revenue.png")
            case "share":
                return require("../assets/icons/profile/share.png")
            case "upload":
                return require("../assets/icons/profile/upload.png")
            case "upload-blue":
                return require("../assets/icons/profile/upload-blue.png")
            case "user":
                return require("../assets/icons/profile/user.png")
        default:
            return require("../assets/imgs/logo.png");
    }
}