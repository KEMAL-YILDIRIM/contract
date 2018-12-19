import {boxShadow, container, title, colors} from "assets/styles/contractStyles";

const termsStyles = {
    section: {
        padding: "70px 0"
    },
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "17px",
        height: "17px",
        color: "#FFFFFF"
    },
    footer: {
        padding: "15px"
    },
    buttonCancel: {
        marginLeft: "1.6rem"
    },
    iconCancel: {
        color: colors.danger
    },
    iconAccept: {
        color: colors.success
    },
    insertRow: {
        display:"flex"
    },
    ...boxShadow
}

export default termsStyles;