import {boxShadow, container, title} from "assets/styles/contractStyles";

const descriptionStyles = {
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
    inputLabel: {
        top: "10px",
        color: "#AAAAAA",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "1rem",
        textTransform:"none"
    },
    ...boxShadow
}

export default descriptionStyles;