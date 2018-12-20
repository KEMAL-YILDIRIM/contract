import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Fab from "@material-ui/core/Fab";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomTable from "components/CustomTable/CustomTable";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput"
import Button from "components/CustomButtons/Button"
// styles
import componentsStyle from "assets/styles/views/componentsSections/termsStyle"
import {Icon} from "@material-ui/core";

class SectionTerms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            termsData: [
                [
                    "Bakım", "3", "35", "Periyodik bakım maliyetleri sözleşme dışındadır."
                ],
                ["İade", "5", "14", "İade ve değişim için bedel yüklenici tarafından kaşılanır."]
            ],
            temporaryRow: [],
            show: false
        };

        this.addTerm = this
            .addTerm
            .bind(this);

        this.editTerm = this
            .editTerm
            .bind(this);

        this.deleteTerm = this
            .deleteTerm
            .bind(this);

        this.showInsertRow = this
            .showInsertRow
            .bind(this);

        this.handleCancel = this
            .handleCancel
            .bind(this);

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    addTerm() {
        for (let i = 0; i < 4; i++) {
            if (this.state.temporaryRow[i] === undefined) 
                this.setState(state => state.temporaryRow[i] = '');
            }
        this.setState(state => state.termsData.push(state.temporaryRow));
        this.handleCancel();
    }

    editTerm() {}

    deleteTerm() {
        this.setState(state => state.termsData.pop());
    }

    showInsertRow() {
        this.setState(state => state.show = true);
    }

    handleCancel() {
        this.setState((state) => {
            state.show = false;
            state.temporaryRow = [];
            return state;
        });
    }

    handleChange(item) {
        this.setState(state => state.temporaryRow[item.index] = item.value);
    }

    render() {

        const {classes} = this.props;

        const insertRow = (
            <GridItem xs={12} sm={12} md={12} lg={12} className={classes.insertRow}>
                <GridItem xs={12} sm={6} md={2} lg={2}>
                    <CustomInput
                        inputProps={{
                        onChange: (event) => {
                            this.handleChange({value: event.target.value, index: 0})
                        }
                    }}
                        labelText="Konu"/>
                </GridItem>
                <GridItem xs={12} sm={3} md={1} lg={1}>
                    <CustomInput
                        inputProps={{
                        onChange: (event) => {
                            this.handleChange({value: event.target.value, index: 1})
                        }
                    }}
                        labelText="Madde"/>
                </GridItem>
                <GridItem xs={12} sm={3} md={1} lg={1}>
                    <CustomInput
                        inputProps={{
                        onChange: (event) => {
                            this.handleChange({value: event.target.value, index: 2})
                        }
                    }}
                        labelText="Sayfa"/></GridItem>
                <GridItem xs={12} sm={12} md={5} lg={5}>
                    <CustomInput
                        inputProps={{
                        onChange: (event) => {
                            this.handleChange({value: event.target.value, index: 3})
                        }
                    }}
                        labelText="Açıklama"/></GridItem>
                <GridItem xs={12} sm={6} md={1} lg={1}>
                    <Button
                        onClick={this.addTerm}
                        className={classes.buttonAccept}
                        color="transparent">
                        <Icon className={classes.iconAccept}>
                            check_outline</Icon>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={1} lg={1}>
                    <Button
                        onClick={this.handleCancel}
                        className={classes.buttonCancel}
                        color="transparent">
                        <Icon className={classes.iconCancel}>
                            cancel_outline</Icon>
                    </Button>
                </GridItem>
            </GridItem>
        );
        const emptyRow = <div></div>;

        return (
            <div className={classes.section} id="terms">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Şartlar</h2>
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="success">
                                        <h4 className={classes.cardTitleWhite}>Mitsubishi Klima</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <CustomTable
                                            onEdit={this.editTerm}
                                            onDelete={this.deleteTerm}
                                            onAdd={this.addTerm}
                                            tableHead={["Konu", "Madde", "Sayfa", "Açıklama"]}
                                            tableData={this.state.termsData}/> {this.state.show
                                            ? insertRow
                                            : emptyRow}
                                    </CardBody>
                                    <CardFooter className={classes.footer}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <Fab onClick={this.showInsertRow} size="small" color="primary">
                                                    <Icon>add</Icon>
                                                </Fab>
                                            </GridItem>
                                        </GridContainer>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyle)(SectionTerms);