import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DropBoxArea from "components/DropBoxArea/DropBoxArea";
// style
import componentsStyles from "assets/styles/views/componentsSections/filesStyle";

export interface ContainerState {
    droppedFiles : any[]
}

class SectionDocuments extends React.Component < {},
ContainerState > {
    constructor(props) {
        super(props);
        this.state = {            
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.section} id="template">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Dökümanlar</h2>
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                                <DropBoxArea/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyles)(SectionDocuments);