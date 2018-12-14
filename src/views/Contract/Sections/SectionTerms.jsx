import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomTable from "components/CustomTable/CustomTable";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
// styles
import componentsStyle from "assets/styles/views/componentsSections/termsStyle"

class SectionTerms extends React.Component {
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
                                            tableHead={["Konu", "Madde", "Sayfa", "Açıklama"]}
                                            tableData={[
                                            [
                                                "Bakım", "3", "35", "Periyodik bakım maliyetleri sözleşme dışındadır."
                                            ],
                                            ["İade", "5", "14", "İade ve değişim için bedel yüklenici tarafından kaşılanır."]
                                        ]}/>
                                    </CardBody>
                                    <CardFooter>
                                        <p className={classes.cardCategoryWhite}></p>
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