import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import FileList from "components/FileList/FileList";
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
            droppedFiles: []
        };
    }

    handleFileDrop = (item : any, monitor : DropTargetMonitor) => {
        if (monitor) {
            const droppedFiles = monitor
                .getItem()
                .files;
            this.setState({droppedFiles});
        }
    }

    render() {
        const {classes} = this.props;
        const {droppedFiles} = this.state;

        return (
            <div className={classes.section} id="template">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Dökümanlar</h2>
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={2} lg={2}>
                                
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyles)(SectionDocuments);