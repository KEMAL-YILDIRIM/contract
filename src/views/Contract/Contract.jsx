import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// "react-router-dom"; @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// sections for this page
import SectionParties from "./Sections/SectionParties";
import SectionTerms from "./Sections/SectionTerms";
import SectionDescription from "./Sections/SectionDescription";
import SectionDocuments from "./Sections/SectionDocuments";

// style
import componentsStyle from "assets/styles/views/contractPage.jsx";

class Contract extends React.Component {
  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (
      <div>
        <Header
          brand="Artı Soft"
          rightLinks={<HeaderLinks/>}
          fixed
          color="transparent"
          changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
          {...rest}/>
        <Parallax
          filter={true}
          image={require("assets/images/business-relationship.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>SÖZLEŞME</h1>
                  <h3 className={classes.subtitle}>
                    İşiniz için sağlam bir zemin.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionDescription/>          
        </div>
        <div className={classNames(classes.main, classes.sub)}>
          <SectionParties/>          
        </div>
        <div className={classNames(classes.main, classes.sub)}>
          <SectionTerms/>          
        </div>
        <div className={classNames(classes.main, classes.sub)}>
          <SectionDocuments/>          
        </div>

        <Footer/>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Contract);
