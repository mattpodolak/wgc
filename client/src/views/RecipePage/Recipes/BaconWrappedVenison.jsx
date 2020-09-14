import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import venison from "assets/img/recipes/venison.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class BaconWrappedVenison extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Wild Game Cooking"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={venison} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Bacon Wrapped Venison</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Ingredients</h3>
                <ul>
                  <li>One cleaned venison Striploin (portioned to at least 4 oz potions)</li>
                  <li>Butchers twine</li>
                  <li>1-lb sliced bacon</li>
                  <li>1-liter red wine</li>
                  <li>2 large onions</li>
                  <li>3 cloves of garlic</li>
                  <li>1 sprig of thyme</li>
                  <li>500 ml demi-glaze or brown beef gravy</li>
                  <li>250 grams of stilton cheese</li>
                  <li>Steak spice, Cajun seasoning, Salt and pepper to taste</li>
                </ul>
                </GridItem>
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Instructions</h3>
                <ol>
                  <li>Portion your backstrap into 4-6-ounce steaks</li>
                  <li>
                    Wrap each steak with one slice of bacon each, and with the butcher’s twine and tie slip not
                    around securing the bacon to the steak, but not too tight just snug enough to hold bacon in
                    place.
                  </li>
                  <li>Put steaks into the fridge and start peeling and chopping onions and garlic.</li>
                  <li>
                    Chop onions medium dice and garlic rough chop add to a medium heated pan and brown the
                    garlic and onions and slowly add the wine and reduce all to 50%
                  </li>
                  <li>
                    Add the demi-glaze and sprig of thyme reduce slowly on low heat, once your sauce3 is reduced
                    to your preferred thickness (my suggestion is once it has coated the back of a spoon without
                    running)
                  </li>
                  <li>With a heavy skillet on high heat season the steaks with Cajun spice salt and pepper.</li>
                  <li>
                    Add 2 tablespoons of whole butter and immediately add the steaks pan fry evenly on both sides
                    place on a baking sheet to rest 2 minutes.
                  </li>
                  <li>Prepare your accompaniments and place them on a plate.</li>
                  <li>Place two steaks per plate</li>
                  <li>Crumble the cheese on top of each steak</li>
                  <li>Heat sauce and season to taste, spoon heated sauce over crumbled cheese and serve.</li>
                </ol>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

BaconWrappedVenison.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(BaconWrappedVenison);
