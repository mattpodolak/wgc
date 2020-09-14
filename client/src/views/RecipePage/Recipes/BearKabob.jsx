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

import kabob from "assets/img/recipes/kabob.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class BearKabob extends React.Component {
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
                      <img src={kabob} alt="..." className={imageClasses} />
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Ingredients</h3>
                <ul>
                  <li>18oz Ground bear meat</li>
                  <li>18oz Ground pork or wild boar meat</li>
                  <li>½ cup Fresh cilantro (chopped)</li>
                  <li>½ cup Fresh mint (chopped)</li>
                  <li>2 medium size sweet onions (finely chopped)</li>
                  <li>2 Garlic cloves (whole, peeled)</li>
                  <li>2-tsps Ground coriander</li>
                  <li>1-tbsp Fresh grated ginger</li>
                  <li>15-ml Cayenne</li>
                  <li>2-tsps Smoked paprika</li>
                  <li>10-ml Cumin</li>
                  <li>½ tsp Ground allspice</li>
                  <li>½ tsp Cinnamon</li>
                  <li>½ tsp Ground cloves</li>
                  <li>1-tbsp Kosher salt</li>
                  <li>1-2-tbsps Coarse black pepper</li>
                  <li>2-3-tbsp Vegetable oil</li>
                  <li>2-tbsps Chopped parsley (optional)</li>
                  <li>1-tbsp Sriracha Sauce</li>
                  <li>16 Bamboo skewers (soaked in water)</li>
                </ul>
                </GridItem>
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Instructions</h3>
                <ol>
                  <li>Combine meats together in large stainless-steel bowl.</li>
                  <li>
                    Add all ingredients to the meat and add about ¼ cup of water and mix by hand until all
                    ingredients are evenly incorporated.
                  </li>
                  <li>Place the bowl into a fridge uncovered to cool for half an hour.</li>
                  <li>
                    When cooled take your meat out and shape your meat into even elongated oval patties 4-5 oz
                    approximately each.
                  </li>
                  <li>
                    Place two bamboo skewers per Kabob and fold over the edges.
                  </li>
                  <li>Put all skewered Kabobs on tray and put back into the fridge until next stage is complete.</li>
                  <li>
                    Preheat your grill and spray generously with vegetable oil.
                  </li>
                  <li>Place your Kabobs on the grill and turn after three minutes repeat once.</li>
                  <li>
                    With a thermometer make sure inside temperature of the meat reaches at least 74 degrees
                    Celsius/165 Fahrenheit.
                  </li>
                  <li>Place into a clean container and cover until ready to serve.</li>
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

BearKabob.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(BearKabob);
