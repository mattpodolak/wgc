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

import pheasant from "assets/img/recipes/pheasant.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class PheasantMushroom extends React.Component {
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
                      <img src={pheasant} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Pheasant with Mushroom Sauce</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Ingredients</h3>
                <ul>
                <li>1 whole Pheasant sectioned into quarters partially boned, cleaned and trimmed (Bones removed are saved)</li>
                  <li>½ cup tomato passata</li>
                  <li>1-liter chicken stock</li>
                  <li>½- liter Demi Glaze or a can of mushroom sauce</li>
                  <li>1.5 cups of assorted mushrooms sliced</li>
                  <li>1.4 oz package of Dried Porcini mushrooms soaked in warm water</li>
                  <li>Salt and course Black pepper to taste</li>
                  <li>Cajun spice a few pinches</li>
                </ul>
                </GridItem>
                <GridItem style={{textAlign: "left"}} xs={12} sm={8} md={8} className={classes.navWrapper}>
                <h3>Instructions</h3>
                <h5>Sauce Base</h5>
                <ol>
                  <li>
                    Cut up bones and add 1 half of onion if desired add tomato to a bowl and toss bones season with a
                    sprinkle of salt and course black pepper.
                  </li>
                  <li>
                    Add to a hot pan and brown evenly, when browned evenly add to the chicken stock in a pot large
                    enough to hold all the bones and stock.
                  </li>
                  <li>Bring to a boil and then lower to a simmer.</li>
                  <li>
                    Let reduce for 40 minutes to an hour on a simmer. Do not boil.
                  </li>
                </ol>
                <h5>Pheasant Meat</h5>
                <ol>
                  <li>
                    Season both sides of the meat with salt pepper Cajun spice
                  </li>
                  <li>
                    In a hot pan place some butter when it turns brown add you dark meat first then your breast meat skin side down.
                  </li>
                  <li>Place your leg and thigh meat into a casserole dish large enough to hold all meat.</li>
                  <li>
                    Strain your reduced by half sauce base into the casserole dish with the dark meat sections.
                  </li>
                  <li>
                    Cover this dish and place into a preheated oven 350 degrees for at least 25 minutes.
                  </li>
                  <li>
                    Place your breast meat aside covered and reserve.
                  </li>
                  <li>
                    After 25 minutes check your leg and thighs with a fork to see what level of tenderness you have
                    achieved. Remember you will continue to cook for an additional 25 minutes.
                  </li>
                  <li>
                    If satisfied add your breast meat, cover, and put back into the 350-degree oven for an additional 20-30 minutes.
                  </li>
                </ol>
                <h5>Sauce Preparation</h5>
                <ol>
                  <li>
                    Remove the dried mushrooms from the liquid, squeeze and chop and set aside saving the liquid separately.
                  </li>
                  <li>
                    In a sauté pan add some butter and the chopped fresh mushrooms, season to taste with your favorite fresh herbs, salt, and pepper.
                  </li>
                  <li>When mushrooms are cooked add reserved chopped rehydrated mushrooms, toss until mixed evenly, set aside.</li>
                  <li>
                    Remove the meat from the cooking liquid and put in a pot reduce by half or until you see the
                    consistency show signs of thickening if satisfied ad some of this thick liquid to the mushrooms finish with some butter, balsamic vinegar or a gastrique to taste.
                  </li>
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

PheasantMushroom.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(PheasantMushroom);
