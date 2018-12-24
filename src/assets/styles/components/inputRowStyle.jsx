import {boxShadow, colors, defaultFont} from "assets/styles/contractStyles";

const inputRowStyle = {
    tableButton: {
        padding: "15px"
    },
    iconCancel: {
        color: colors.danger
    },
    tableCell: {
      ...defaultFont,
      lineHeight: "1.42857143",
      padding: "12px 8px"
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