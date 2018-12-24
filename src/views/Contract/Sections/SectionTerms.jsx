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
// styles
import componentsStyle from "assets/styles/views/componentsSections/termsStyle";
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
            termsHeaderNames: [
                "Konu", "Madde", "Sayfa", "Açıklama"
            ],
            emptyRow: [
                "", "", "", ""
            ],
            inputRowMode: "add",
            editingRowIndex: -1,
            editingRowData: ["", "", "", ""]
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

        this.handleAdd = this
            .handleAdd
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
            if (this.state.editingRowData[i] === undefined) 
                this.setState(state => state.editingRowData[i] = '');
            }
        this.setState(state => state.termsData.push(state.editingRowData));
        this.handleCancel();
    }

    editTerm(item) {
        this.setState(state => state.inputRowMode = "edit");
        this.setState(state => state.editingRowData = state.termsData[item.index]);
        this.setState(state => state.editingRowIndex = item.index);
    }

    deleteTerm() {
        this.setState(state => state.termsData.pop());
    }

    handleAdd() {
        this.setState(state => state.inputRowMode = "add");
        this.setState(state => state.editingRowIndex = (state.termsData.length));
        this.setState(state => state.termsData.push(state.emptyRow));
    }

    handleCancel() {
        this.setState((state) => {
            state.editingRowIndex = -1
            state.editingRowData = state.emptyRow;
        });
        if (this.state.inputRowMode === "add") {
            this.deleteTerm();
        }
    }

    handleChange(item) {
        this.setState(state => state.editingRowData[item.index] = item.value);
    }

    render() {

        const {classes} = this.props;

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
                                            editingRowIndex={this.state.editingRowIndex}
                                            editingRowData={this.state.editingRowData}
                                            onChange={this.handleChange}
                                            onAccept={this.addTerm}
                                            onEdit={this.editTerm}
                                            onDelete={this.deleteTerm}
                                            onCancel={this.handleCancel}
                                            tableHeaderNames={this.state.termsHeaderNames}
                                            tableData={this.state.termsData}/>
                                    </CardBody>
                                    <CardFooter className={classes.footer}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <Fab onClick={this.handleAdd} size="small" color="primary">
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