import React from 'react';
// @material-ui/core components
import Table from '@material-ui/core/Table';
import {withStyles} from '@material-ui/core';
// styles
import componentsStyle from 'assets/js/views/componentsSections/termsStyle'

class SectionTerms extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.sections} id="terms">
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Şartlar</h2>
                    </div>
                    <div>
                        <Table>
                            
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(componentsStyle)(SectionTerms);