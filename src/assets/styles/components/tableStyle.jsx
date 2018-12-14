import {colors,defaultFont} from "assets/styles/contractStyles.jsx";

const tableStyle = theme => ({
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1em",
    fontWeight: "bolder",
    padding: "12px 8px"
  },
  tableButton: {
    padding: "12px 0px"
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px"
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  successColor:{
    color:colors.success
  },
  dangerColor:{
    color:colors.danger
  }
});

export default tableStyle;
