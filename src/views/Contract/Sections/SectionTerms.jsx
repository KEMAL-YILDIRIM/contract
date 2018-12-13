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
import componentsStyle from "assets/js/views/componentsSections/termsStyle"

class SectionTerms extends React.Component {
    render() {
        const {classes, contractName, subtitle} = this.props;
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
                                    <CardHeader color="primary">
                                        <h4 className={classes.cardTitleWhite}>{contractName}</h4>
                                        <p className={classes.cardCategoryWhite}>{subtitle}</p>
                                    </CardHeader>
                                    <CardBody>
                                        <CustomTable
                                            tableHeaderColor="rose"
                                            tableHead={["Name", "Country", "City", "Salary"]}
                                            tableData={[
                                            [
                                                "Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"
                                            ],
                                            [
                                                "Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"
                                            ]
                                        ]}/>
                                    </CardBody>
                                    <CardFooter/>
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