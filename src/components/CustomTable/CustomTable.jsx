import React from "react";

// prop types
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

// @material-ui/icons
import {Icon} from "@material-ui/core";

// core components
import Button from "../CustomButtons/Button"

// styles
import tableStyle from "assets/styles/components/tableStyle.jsx";
import {colors} from "assets/styles/contractStyles";

function CustomTable({
  ...props
}) {
  const {classes, tableHead, tableData, tableHeaderColor} = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined
          ? (
            <TableHead
              style={{
              color: colors[tableHeaderColor]
            }}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableHeadCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableHeadCell}>
                  {"Düzenle"}
                </TableCell>
                <TableCell className={classes.tableHeadCellDelete}>
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
                <TableCell key={"edit"} className={classes.tableCell}>
                  < Button className={classes.tableButton} color="transparent">
                    <Icon className={classes.editButton}>edit_outline</Icon>
                  </Button>
                </TableCell>
                <TableCell key={"Sil"} className={classes.tableCell}>
                  < Button className={classes.tableButton} color="transparent">
                    <Icon className={classes.deleteButton}>delete_outline</Icon>
                  </Button>
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
  tableHeaderColor: PropTypes.oneOf(Object.getOwnPropertyNames(colors)),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
