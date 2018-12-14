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
  tableHeadCellDelete: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1em",
    fontWeight: "bolder",
    padding: "25px"
  },
  tableButton: {
    padding: "15px"
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
  editButton:{
    color:colors.success,
    marginRight:"0px !important"
  },
  deleteButton:{
    color:colors.danger,    
    marginRight:"0px !important"
  }
});

export default tableStyle;
