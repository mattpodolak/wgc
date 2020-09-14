import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Season1Pills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <NavPills
            color="info"
            horizontal={{
              tabsGrid: { xs: 4, sm: 4, md: 4 },
              contentGrid: { xs: 8, sm: 8, md: 8 }
            }}
            tabs={[
              {
                tabButton: "Episode 1",
                //tabIcon: Dashboard,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert demonstrates an easy recipe for Bison, a Wellington dish.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 2",
                //tabIcon: Schedule,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert is joined in the kitchen by our number-one fan, Dave Brown, who has brought in
some pronghorn antelope for Chef Rupert to work with. In the kitchen, Chef Rupert prepares
two dishes, a pronghorn antelope stuffed mushroom appetizer and a pronghorn antelope taco.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 3",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    From the bear that Chef Rupert and his hunting buddy were able to get in the Spring, Chef
Rupert demonstrates how to prepare a Spring Black Bear Backstrap pan-seared with mushroom
sauce and cheesy polenta.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 4",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert welcomes Dave Brown into the kitchen to show him a couple of ways to prepare
Woodland Caribou. In his first dish, Chef Rupert makes some Woodland Caribou kabobs with
Tzatziki. In his second dish, Chef Rupert demonstrates how to make pan-roasted, smoke kissed Woodland Caribou backstraps served with potato puree, roasted root vegetables and an apple-
jerk barbeque sauce.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 5",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert finally gets a bear and decides to prepare some bear sausages with pork. After
demonstrating how to make sausages, Chef Rupert shows how to prepare a Bear Sausage with
balsamic onions and peppers dish.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 6",
                //tabIcon: Dashboard,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert welcomes guest Chef Attilio to join him for a Forcemeat episode where they
prepare some wild boar and elk pâté, then Chef Rupert shows Chef Attilio how to make a wild
boar meatloaf.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 7",
                //tabIcon: Schedule,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert demonstrates how easy it is to prepare a couple of pasta dishes using Moose meat.
After preparing the ground game meat, Chef Rupert shows how to make pasta for both dishes,
a Moose ravioli dish and a fettuccini Moose Bolognese dish.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 8",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    Chef Rupert hits the beach for a remote Wild Game Cooking episode on the shores of Georgian
Bay. With his new portable fryer, Chef Rupert demonstrates how easy it is to cook up a
delicious fish fry on the beach with trout, red snapper, bream, shrimp and, for our viewers in
New Zealand, some John Dory.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 9",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    On a beach, nestled on the shores of Georgian Bay, Chef Rupert cooks up a Wild Game BBQ
feast. Featuring Bear Side Ribs, Bear and Wild Boar sausages, bear and beef burgers, corn, a
fruit salsa and BBQ vegetables, Chef Rupert shows how easy it is to barbecue on the beach if
you’re prepared.
                    </p>
                  </span>
                )
              },
              {
                tabButton: "Episode 10",
                //tabIcon: List,
                tabContent: (
                  <span className={classes.pillText}>
                    <p>
                    If you like steak Chef Rupert demonstrates how to prepare a couple of different types of steak,
a striploin and a ribeye from a Bison and an Elk. Both served up with carrots, pommes
Lyonnaise (fried potatoes and onions), and creamed spinach, topped with minute steak and
blue cheese.
                    </p>
                  </span>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer> 
    );
  }
}

Season1Pills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(Season1Pills);
