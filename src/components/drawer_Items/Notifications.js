import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Switch, Divider, ListItem, ListItemText, IconButton, Toolbar, Typography } from '@material-ui/core';
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
        marginLeft: "25px"
    },
    // resp:{
    //     marginLeft:"25px"
    // }
}))
const Notifications = (props) => {
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
                        Notifications
                  </Typography>
                </Toolbar>
            </AppBar>

            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="h6"
                            className={classes.inline}
                            color="inherit">
                            Switch 
                </Typography>
                    </React.Fragment>
                }
            />
            <Switch color="primary" checked />
            <Divider className={classes.divider} />

            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="h6"
                            className={classes.inline}
                            color="primary">
                            To be Resolved
                </Typography>
                    </React.Fragment>
                }
            />
            <ListItem alignItems="flex-start" >
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="h6"
                                className={classes.inline}
                                color="inherit"
                            >
                                Notification Tone
                </Typography> <br />
                            <Typography component="span" style={{ marginLeft: "24px" }}
                                variant="body1" color="textSecondary">Default</Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

            <ListItem alignItems="flex-start" >
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="h6"
                                className={classes.inline}
                                color="inherit"
                            >
                                Frequency
                </Typography> <br />
                            <Typography component="span" style={{ marginLeft: "24px" }}
                                variant="body1" color="textSecondary">Once a week</Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="h6"
                            className={classes.inline}
                            color="primary">
                            Last Pinged
                </Typography>
                    </React.Fragment>
                }
            />
            <ListItem alignItems="flex-start" >
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="h6"
                                className={classes.inline}
                                color="inherit"
                            >
                                Notification Tone
                </Typography> <br />
                            <Typography component="span" style={{ marginLeft: "24px" }}
                                variant="body1" color="textSecondary">Default</Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

            <ListItem alignItems="flex-start" >
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="h6"
                                className={classes.inline}
                                color="inherit"
                            >
                                Frequency
                </Typography> <br />
                            <Typography component="span" style={{ marginLeft: "24px" }}
                                variant="body1" color="textSecondary">Once a week</Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </div>
    )
}

export default Notifications

