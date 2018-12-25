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
            inputRowMode: "default",
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

    addTerm(item) {

        let termsDataInstance = this.state.termsData;
        termsDataInstance.splice(item.index, 1, this.state.editingRowData);

        //clear editing row
        const rowDataInstance = this.state.editingRowData;
        const newRowDataInstance = rowDataInstance.map((_item, _index) => {
            return _item = "";
        });

        this.setState({inputRowMode: "default", termsData: termsDataInstance, editingRowIndex: -1, editingRowData: newRowDataInstance});
    }

    editTerm(item) {
        const rowDataInstance = this.state.editingRowData;
        const termsDataInstance = this.state.termsData;
        const arraySize = rowDataInstance.length;
        const newRowDataInstance = rowDataInstance.map((_item, _index) => {
            return _item = termsDataInstance[item.index][_index];
        });
        this.setState({inputRowMode: "edit", editingRowData: newRowDataInstance, editingRowIndex: item.index});
    }

    deleteTerm(item) {
        let termsDataInstance = this.state.termsData;
        termsDataInstance.splice(item.index, 1);
        this.setState({termsData: termsDataInstance});
    }

    handleAdd() {
        if (this.state.inputRowMode !== "default") 
            return;
        const dataLength = this.state.termsData.length;
        let termsDataInstance = this.state.termsData;
        termsDataInstance.splice(dataLength, 0, this.state.emptyRow);
        this.setState({inputRowMode: "add", editingRowIndex: dataLength, termsData: termsDataInstance});
    }

    handleCancel(item) {
        let termsDataInstance = this.state.termsData;
        if (this.state.inputRowMode === "add") {
            termsDataInstance.splice(item.index, 1);
        }

        const rowDataInstance = this.state.editingRowData;
        const newRowDataInstance = rowDataInstance.map((_item, _index) => {
            return _item = "";
        });
        this.setState({inputRowMode: "default", editingRowIndex: -1, editingRowData: newRowDataInstance, termsData: termsDataInstance});
    }

    handleInputChange(item) {
        let rowDataInstance = this.state.editingRowData;
        rowDataInstance.splice(item.index, 1, item.value);
        this.setState({editingRowData: rowDataInstance});
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