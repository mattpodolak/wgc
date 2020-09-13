import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import Season1Pills from "./Season1Pills";
import Season2Pills from "./Season2Pills";

class AboutPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Episode Summaries</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <NavPills
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Season 1",
                        //tabIcon: Dashboard,
                        tabContent: (
                          <Season1Pills/>
                        )
                      },
                      {
                        tabButton: "Season 2",
                        //tabIcon: Dashboard,
                        tabContent: (
                          <Season2Pills/>
                        )
                      }
                    ]}
                  />
                </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

AboutPills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(AboutPills);
