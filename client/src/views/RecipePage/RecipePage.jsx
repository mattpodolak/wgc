import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// import recipe images
import venison from "assets/img/recipes/venison.png";
import pheasant from "assets/img/recipes/pheasant.png";
import kabob from "assets/img/recipes/kabob.png";

const dashboardRoutes = [];

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Wild Game Cooking"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/contact-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Recipes</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <GridContainer justify="center" alignItems="center">
              <GridItem style={{maxWidth: "400px"}} spacing={1} xs={12} sm={12} md={8} className={classes.gridcontainer}>
                <Card >
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={venison}
                    alt="Bacon wrapped venison"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Bacon Wrapped Venison</h4>
                    {/* <p>Bacon-Wrapped Venison Backstrap Medallions, Topped With Stilton Cheese, Red Wine Sauce.</p> */}
                    <Button href="/recipes/bacon-wrapped-venison" color="primary">Try Recipe</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={pheasant}
                    alt="Pheasant with mushroom sauce"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Pheasant with Mushroom Sauce</h4>
                    {/* <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Button href="/recipes/pheasant-mushroom-sauce" color="primary">Try Recipe</Button>
                  </CardBody>
                </Card>
                <Card>
                  <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={kabob}
                    alt="Bear Kabobs"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Middle Eastern Bear Meat Kabobs</h4>
                    {/* <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Button href="/recipes/bear-meat-kabobs" color="primary">Try Recipe</Button>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(ContactPage);
