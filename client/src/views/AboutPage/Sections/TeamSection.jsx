import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

import team2 from 'assets/img/faces/becky.png';
import team3 from 'assets/img/faces/raffi.png';
import tillman from 'assets/img/faces/tillman.jpg';
import attilio from 'assets/img/faces/attilio.jpg';

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Guest Chefs - Season 1</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Becky Lennerton
                  <br />
                  <small className={classes.smallTitle}>Guest Chef</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    As the corporate chef of the Black River Food Company who
                    believes in the “Farm-to-table” philosophy. Chef Becky
                    operates a catering company and a food truck that features
                    wild game.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Raffi
                  <br />
                  <small className={classes.smallTitle}>Guest Chef</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A corporate chef and butcher, Chef Raffi is an expert at
                    breaking down wild game to maximize yield. With his culinary
                    experience, Chef Raffi presents new ways of preparing wild
                    game, quick, easy and delicious.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} alignItems="center">
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={tillman} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Jason Tilmann
                  <br />
                  <small className={classes.smallTitle}>Guest Chef</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Having studied with chefs such as Iron Chef Morimoto, Ming
                    Tsai, David Burke, Norman Love, Chef Jason went on to be
                    executive chef at a number of restaurants in New York City
                    and is currently planning to open his own restaurant in
                    Michigan.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <h2 className={classes.title}>Guest Chefs - Season 2</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} alignItems="center">
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={attilio} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Attilio
                  <br />
                  <small className={classes.smallTitle}>Guest Chef</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A former Culinary Student of Chef Rupert’s, Attilio is a
                    project manager for a manufacturing company and part-time
                    corporate Chef.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(teamStyle)(TeamSection);
