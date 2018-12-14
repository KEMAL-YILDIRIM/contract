import React from "react";

// @material-ui/core components
import withStyle from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
// styles
import componentsStyle from "assets/styles/views/componentsSections/partiesStyle";

class SectionParties extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section} id="parties">
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Taraflar</h2>
          </div>
          <div>
            <div className={classes.title}>
              <h3>İşveren</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Firma"
                  id="owner_company"
                  formControlProps={{
                  fullWidth: true
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Yetkili"
                  id="responsible_person"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Görev"
                  id="float"
                  formControlProps={{
                  fullWidth: true
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="E-Posta"
                  id="email"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Telefon"
                  id="phone"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Phone/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
            </GridContainer>
          </div>
          <div>
            <div className={classes.title}>
              <h3>Yüklenici</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Firma"
                  id="owner_company"
                  formControlProps={{
                  fullWidth: true
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Yetkili"
                  id="responsible_person"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Görev"
                  id="float"
                  formControlProps={{
                  fullWidth: true
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="E-Posta"
                  id="email"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} lg={2}>
                <CustomInput
                  labelText="Telefon"
                  id="phone"
                  formControlProps={{
                  fullWidth: true
                }}
                  inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Phone/>
                    </InputAdornment>
                  )
                }}/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyle(componentsStyle)(SectionParties);