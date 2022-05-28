import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, ListItem, ListItemText, IconButton, Toolbar, Typography } from '@material-ui/core';
import theme from "../Theme";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawerButton: {
        background: 'linear-gradient(270deg, rgb(184 154 255) 0%, rgb(250, 172, 168) 80%)',
        border: 'none',
        fontSize: '18px',
        color: '#f4f4f4',
        paddingRight: '90px',
        height: '57.5px',
    },
    drawer: {
        width: '215px'
    },
    inline: {
        display: 'inline',
        marginLeft: "40px"
    },
    resp: {
        marginLeft: '25px'
    }
}))
const About = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: theme.palette.primary.mainGradient }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={openHandler}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        About
                  </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="h6"
                            className={classes.inline}
                            color="primary">
                            Our Mission:
                </Typography>
                    </React.Fragment>
                }
            />
            <ListItem  >
                <ListItemText primary="Promoting learning/working environment by ensuring the basic human rights of both the students and Educators." className={classes.resp} />
            </ListItem>
        </div>
    )
}

export default About

