import {boxShadow, container, title} from "assets/styles/contractStyles";

const partiesStyles = {
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
    party: {
        marginLeft: "15px",
        marginRight: "15px"
    },
    ...boxShadow
}

export default partiesStyles;