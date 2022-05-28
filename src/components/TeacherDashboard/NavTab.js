import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import theme from "../Theme";
import Feed from "./Feed";
import Dashboard from "./Dashboard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (

        <Container>
          <Box>
            {children}
          </Box>
        </Container>

      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

}));

const NavTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Paper>
    <div className={classes.root}>
      <AppBar position="sticky" style={{ background: theme.palette.primary.mainGradient }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
        >
          <LinkTab label="Feed" />
          <LinkTab label="Dashboard" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Feed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dashboard />
      </TabPanel>
    </div>
    // {/* </Paper> */}
  );
}

export default NavTab