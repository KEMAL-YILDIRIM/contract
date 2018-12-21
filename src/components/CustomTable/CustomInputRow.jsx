import React from "react";
// prop types
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import {Icon} from "@material-ui/core";
// core components
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput"
// styles
import inputRowStyle from "assets/styles/components/inputRowStyle.jsx";

function CustomInputRow({...props}) {
    const {classes,editingRowData} = props;
    return(
    <GridItem xs={12} sm={12} md={12} lg={12} className={classes.insertRow}>
        <GridItem xs={12} sm={6} md={2} lg={2}>
            <CustomInput
                inputProps={{
                onChange: (event) => {
                    props.onChange({value: event.target.value, index: 0})
                }
            }}
                labelText="Konu"/>
        </GridItem>
        <GridItem xs={12} sm={3} md={1} lg={1}>
            <CustomInput
                inputProps={{
                onChange: (event) => {
                    props.onChange({value: event.target.value, index: 1})
                }
            }}
                labelText="Madde"/>
        </GridItem>
        <GridItem xs={12} sm={3} md={1} lg={1}>
            <CustomInput
                inputProps={{
                onChange: (event) => {
                    props.onChange({value: event.target.value, index: 2})
                }
            }}
                labelText="Sayfa"/></GridItem>
        <GridItem xs={12} sm={12} md={5} lg={5}>
            <CustomInput
                inputProps={{
                onChange: (event) => {
                    props.onChange({value: event.target.value, index: 3})
                }
            }}
                labelText="Açıklama"/></GridItem>
        <GridItem xs={12} sm={6} md={1} lg={1}>
            <Button
                onClick={props.onAccept}
                className={classes.buttonAccept}
                color="transparent">
                <Icon className={classes.iconAccept}>
                    check_outline</Icon>
            </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={1} lg={1}>
            <Button
                onClick={props.onCancel}
                className={classes.buttonCancel}
                color="transparent">
                <Icon className={classes.iconCancel}>
                    cancel_outline</Icon>
            </Button>
        </GridItem>
    </GridItem>
    );
}

CustomInputRow.propTypes = {
    onChange : PropTypes.func,
}


export default withStyles(inputRowStyle)(CustomInputRow);