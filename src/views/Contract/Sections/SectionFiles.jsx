import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import FileList from "components/FileList/FileList";
import DropBox from "components/DropBox/DropBox";
import {DropTarget, DropTargetConnector, ConnectDropTarget, DropTargetMonitor} from 'react-dnd';
// style
import componentsStyles from "assets/styles/views/componentsSections/filesStyle";

export interface ContainerState {
    droppedFiles : any[],
    fileTypes : string[]
}

class File extends React.Component < {},
ContainerState > {
    constructor(props) {
        super(props);
        this.state = {
            droppedFiles: [],
            fileTypes: []
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
        const {fileTypes, droppedFiles} = this.state

        return (
            <div className={classes.section} id="template">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Dökümanlar</h2>
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={2} lg={2}>
                                <DropBox accepts={fileTypes} onDrop={this.handleFileDrop}/>
                                <FileList files={droppedFiles}/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyles)(File);