import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";

import customInputStyle from "assets/styles/components/customInputStyle.jsx";

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shrinkLabel: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState(state => ({
      shrinkLabel: !state.shrinkLabel
    }));
  }

  render() {

    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success
    } = this.props;

    const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
      formControlClasses = classNames(formControlProps.className, classes.formControl);
    } else {
      formControlClasses = classes.formControl;
    }

    require('moment/locale/tr');
    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined
          ? (
            <InputLabel
              className={classes.labelRoot + " " + labelClasses}
              shrink={this.state.shrinkLabel}
              htmlFor={id}
              {...labelProps}>
              {labelText}
            </InputLabel>
          )
          : null}
        <Datetime
          locale="tr"
          timeFormat={false}
          className={classes.date}
          id={id}
          onChange={this.onChange}
          inputProps={inputProps}/>
      </FormControl>
    );
  }
}

CustomDatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomDatePicker);
