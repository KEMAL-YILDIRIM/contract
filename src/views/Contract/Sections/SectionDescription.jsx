import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// style
import componentsStyles from "assets/styles/views/componentsSections/descriptionStyle";

class Description extends React.Component {
    render() {
        const {classes} = this.props;
        require('moment/locale/tr');
        return (
            <div className={classes.section} id="template">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Açıklama</h2>
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6} lg={6}>
                                <GridItem>
                                    <CustomInput labelText="Sözleşme numarası"/>
                                </GridItem>
                                <GridItem>
                                    <CustomInput labelText="Sözleşme adı"/>
                                </GridItem>
                                <GridItem>
                                    <CustomInput labelText="Toplam tutar"/>
                                </GridItem>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} lg={6}>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <FormControl fullWidth>
                                        <Datetime
                                            buttonText
                                            locale="tr"
                                            inputProps={{
                                            placeholder: "Başlangıç tarihi"
                                        }}/>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <FormControl fullWidth>
                                        <Datetime
                                            locale="tr"
                                            inputProps={{
                                            placeholder: "Bitiş tarihi"
                                        }}/>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6} className={classes.dropdowns}>
                                    <CustomDropdown
                                        buttonText="Sözleşme kategorisi"
                                        buttonProps={{
                                        className: classes.inputLabel,
                                        color: "transparent"
                                    }}
                                        buttonIcon={{}}
                                        dropdownList={["Kategori 1", "Kategori 1", "Kategori 1"]}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <CustomDropdown
                                        buttonText="Sözleşme tipi"
                                        buttonProps={{
                                        className: classes.inputLabel,
                                        color: "transparent"
                                    }}
                                        dropdownList={["Sozlesme tipi 1", "Sozlesme tipi 3", "Sozlesme tipi 2"]}/>
                                </GridItem>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyles)(Description);