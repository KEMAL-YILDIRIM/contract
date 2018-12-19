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

        this.handleInsert = this
            .handleInsert
            .bind(this);

        this.handleCancel = this
            .handleCancel
            .bind(this);

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    addTerm() {}

    editTerm() {}

    deleteTerm() {}

    handleInsert() {
        this.setState(state => state.show = true)
    }

    handleCancel() {
        this.setState(state => state.show = false)
    }

    handleChange(event) {
        debugger
        console.log(event.target.value + JSON.stringify(event.target.dataset))
    }

    render() {

        const {classes} = this.props;

        const insertRow = (
            <GridItem xs={12} sm={12} md={12} className={classes.insertRow}>
                <GridItem xs={12} sm={6} md={2}>
                    <CustomInput
                        inputProps={{
                        onChange: this.handleChange
                    }}
                        labelText="Konu"/>
                </GridItem>
                <GridItem xs={12} sm={3} md={1}><CustomInput labelText="Madde"/></GridItem>
                <GridItem xs={12} sm={3} md={1}><CustomInput labelText="Sayfa"/></GridItem>
                <GridItem xs={12} sm={12} md={5}><CustomInput labelText="Açıklama"/></GridItem>
                <GridItem xs={12} sm={6} md={1}>
                    <Button onClick={this.handleInsert} color="transparent">
                        <Icon className={classes.iconAccept}>check_outline</Icon>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={1}>
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
                                            tableData={this.state.termsData}/>
                                    </CardBody>
                                    <CardFooter className={classes.footer}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <Fab onClick={this.handleInsert} size="small" color="primary">
                                                    <Icon>add</Icon>
                                                </Fab>
                                            </GridItem>
                                            {this.state.show
                                                ? insertRow
                                                : emptyRow}
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