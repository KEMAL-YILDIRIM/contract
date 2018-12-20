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
        display: "flex",
        justifyContent: "flex-end"
    },
    buttonAccept: {
        margin: "1rem 0px"
    },
    buttonCancel: {
        margin: "1rem 0px 0px 1.5rem"
    },
    iconCancel: {
        color: colors.danger
    },
    iconAccept: {
        color: colors.success
    },
    insertRow: {
        padding: "1rem 0px",
        display: "flex"
    },
    ...boxShadow
}

export default termsStyles;