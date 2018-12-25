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
import Button from "components/CustomButtons/Button";
import CustomInputRow from "components/CustomTable/CustomInputRow";
// styles
import tableStyle from "assets/styles/components/tableStyle.jsx";
import {colors} from "assets/styles/contractStyles";

function CustomTable({
  ...props
}) {
  const {classes, tableHeaderNames, tableData, tableHeaderColor, editingRowIndex} = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHeaderNames !== undefined
          ? (
            <TableHead
              style={{
              color: colors[tableHeaderColor]
            }}>
              <TableRow>
                {tableHeaderNames.map((prop, key) => {
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
          {tableData.map((rowData, rowIndex) => {
            return (editingRowIndex === rowIndex
              ? <CustomInputRow
                  key={rowIndex}
                  rowKey={rowIndex}
                  tableHeaderNames={tableHeaderNames}
                  editingRowData={rowData}
                  onChange={props.onChange}
                  onAccept={props.onAccept}
                  onCancel={props.onCancel}/>
              : <TableRow key={rowIndex}>
                {rowData.map((cellData, cellIndex) => {
                  return (
                    <TableCell className={classes.tableCell} key={cellIndex}>
                      {cellData}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell}>
                  <Button
                    onClick={(event) => {
                    props.onEdit({index: rowIndex})
                  }}
                    className={classes.tableButton}
                    color="transparent">
                    <Icon className={classes.editButton}>edit_outline</Icon>
                  </Button>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Button
                    onClick={(event) => {
                    props.onDelete({index: rowIndex})
                  }}
                    className={classes.tableButton}
                    color="transparent">
                    <Icon className={classes.deleteButton}>delete_outline</Icon>
                  </Button>
                </TableCell>
              </TableRow>);
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
  tableHeaderNames: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
