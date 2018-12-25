import React from "react";
// prop types
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import {Icon} from "@material-ui/core";
// core components
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput"
// styles
import inputRowStyle from "assets/styles/components/inputRowStyle.jsx";

function CustomInputRow({
    ...props
}) {
    const {classes, editingRowData, tableHeaderNames, rowKey} = props;
    return (
        <TableRow key={rowKey}>
            {editingRowData.map((cellProp, cellKey) => {
                return (
                    <TableCell className={classes.tableCell} key={cellKey}>
                        <CustomInput
                            inputProps={{
                            onChange: (event) => {
                                props.onChange({value: event.target.value, index: cellKey})
                            }
                        }}
                            labelText={tableHeaderNames[cellKey]}/>
                    </TableCell>
                );
            })}
            <TableCell className={classes.tableCell} key={editingRowData.length + 1}>
                <Button
                    onClick={props.onAccept}
                    className={classes.tableButton}
                    color="transparent">
                    <Icon className={classes.iconAccept}>
                        check_outline</Icon>
                </Button>
            </TableCell>
            <TableCell className={classes.tableCell} key={editingRowData.length + 2}>
                <Button
                    onClick={props.onCancel}
                    className={classes.tableButton}
                    color="transparent">
                    <Icon className={classes.iconCancel}>
                        cancel_outline</Icon>
                </Button>
            </TableCell>
        </TableRow>
    );
}

CustomInputRow.propTypes = {
    onChange: PropTypes.func,
    editingRowData: PropTypes.array,
    tableHeaderNames: PropTypes.array
}

export default withStyles(inputRowStyle)(CustomInputRow);