import {boxShadow, colors} from "assets/styles/contractStyles";

const inputRowStyle = {
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
    icons: {
        width: "17px",
        height: "17px",
        color: "#FFFFFF"
    },
    ...boxShadow
}

export default inputRowStyle;