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
import CustomInputRow from "components/CustomTable/CustomInputRow";
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

    editTerm(index) {
        this.setState(state => state.termsData.pop())
    }

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
                                            tableHead={["Konu", "Madde", "Sayfa", "Açıklama"]}
                                            tableData={this.state.termsData}/> {this.state.show
                                            ? <CustomInputRow
                                            onChange={this.handleChange}
                                            onAccept={this.addTerm}
                                            onCancel={this.handleCancel}/>
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