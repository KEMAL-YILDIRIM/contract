import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
// style
import componentsStyles from "assets/styles/views/componentsSections/descriptionStyle";

class Description extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section} id="template">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Genel</h2>
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
                                <GridItem>
                                    <CustomDatePicker labelText="Başlangıç tarihi"/>
                                </GridItem>
                                <GridItem>
                                    <CustomDatePicker labelText="Bitiş tarihi"/>
                                </GridItem>
                                <GridItem  className={classes.gridItemDropdown}>
                                    <CustomDropdown
                                        buttonText="Sözleşme kategorisi"
                                        buttonProps={{
                                        className: classes.inputLabel,
                                        color: "transparent"
                                    }}
                                        dropdownList={["Kategori 1", "Kategori 1", "Kategori 1"]}/>
                                </GridItem>
                                <GridItem className={classes.gridItemDropdown}>
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