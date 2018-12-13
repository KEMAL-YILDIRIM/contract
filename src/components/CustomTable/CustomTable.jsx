import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import Button from "../CustomButtons/Button"
// styles
import tableStyle from "assets/js/components/tableStyle.jsx";

function CustomTable({
  ...props
}) {
  const {classes, tableHead, tableData, tableHeaderColor} = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined
          ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableHeadCell}
                      key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell                
                className={classes.tableHeadCell}>
                  {"Düzenle"}
                </TableCell>
                <TableCell
                className={classes.tableHeadCell}>
                  {"Sil"}
                </TableCell>
              </TableRow>
            </TableHead>
          )
          : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell 
                  key={"edit"}
                  className={classes.tableCell}>
                  {
                  <Button 
                  className={classes.tableButton}
                  color="transparent">
                    <i className={classes.successTableHeader + " fas fa-edit"} />
                  </Button>
                }
                </TableCell>
                <TableCell 
                  key={"Sil"}
                  className={classes.tableButton}>
                  {
                  <Button 
                  className={classes.tableCell}
                  color="transparent">
                    <i className={classes.dangerTableHeader + " far fa-trash-alt"} />
                  </Button>
                }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "primary"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
