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

        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    addTerm() {
        const coppyRowData = [...this.state.editingRowData];
        const coppyArray = [...this.state.termsData];
        coppyArray.splice(coppyArray.lengt, 1);
        const newArray = coppyArray.concat([this.state.editingRowData]);
        this.setState({termsData: newArray, editingRowIndex: -1, editingRowData: coppyRowData});
    }

    editTerm(item) {
        const coppyArray = this.state.editingRowData;
        const arraySize = coppyArray.length;
        coppyArray.splice(0, arraySize, this.state.termsData[item.index]);
        this.setState({inputRowMode: "edit", editingRowData: coppyArray, editingRowIndex: item.index});
    }

    deleteTerm(item) {
        const coppyArray = [...this.state.termsData];
        coppyArray.splice(item.index, 1);
        this.setState({termsData: coppyArray});
    }

    handleAdd() {
        const dataLength = this.state.termsData.length;
        const coppyArray = [...this.state.termsData];
        const newArray = coppyArray.concat([this.state.emptyRow]);
        this.setState({inputRowMode: "add", editingRowIndex: dataLength, termsData: newArray});
    }

    handleCancel() {
        const temporaryTermsData = [...this.state.termsData];
        if (this.state.inputRowMode === "add") {
            temporaryTermsData.pop();
        }

        let temporaryRowData = [...this.state.editingRowData];
        Object.assign(temporaryRowData, this.state.emptyRow);
        this.setState({editingRowIndex: -1, editingRowData: temporaryRowData, termsData: temporaryTermsData});
    }

    handleInputChange(item) {
        const coppyArray = [...this.state.editingRowData];
        const newArray = coppyArray.concat([item.value]);
        this.setState({editingRowData: coppyArray});
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
                                            onChange={this.handleInputChange}
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