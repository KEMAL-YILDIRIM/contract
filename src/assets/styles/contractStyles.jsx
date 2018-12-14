import Validate from "../helpers/Validate";
import Convert from "../helpers/Convert"

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px" +
      " 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const colors = {
  primary: "#297fb8",
  secondary: "#9c27b0",
  warning: "#ff9800",
  danger: "#f03e36",
  success: "#a1c739",
  info: "#73c6d7",
  rose: "#e91e63",
  gray: "#999999"
};

// const primaryColor = "#9c27b0";
// const warningColor = "#ff9800";
// const dangerColor = "#f44336";
// const successColor = "#4caf50";
// const infoColor = "#00acc1";
// const roseColor = "#e91e63";
// const grayColor = "#999999";

const coloredBoxShadow = (color) => {
  return Validate.Color(color)
    ? {
      boxShadow: "0 12px 20px -10px rgba(" + Convert
        .HexToRgb(color)
        .join(',') + ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" + Convert
        .HexToRgb(color)
        .join(',') + ", 0.2)"
    }
    : {
      boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), " +
          "0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    }
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, " + colors.warning + ")",
  ...coloredBoxShadow(colors.warning)
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, " + colors.success + ")",
  ...coloredBoxShadow(colors.success)
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, " + colors.danger + ")",
  ...coloredBoxShadow(colors.danger)
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, " + colors.info + ")",
  ...coloredBoxShadow(colors.info)
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, " + colors.primary + ")",
  ...coloredBoxShadow(colors.primary)
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, " + colors.rose + ")",
  ...coloredBoxShadow(colors.rose)
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px" +
      " 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

export {
  //variables
  colors,
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  defaultBoxShadow,
  coloredBoxShadow,
  card,
  defaultFont,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  title,
  cardTitle,
  cardLink,
  cardSubtitle
};
