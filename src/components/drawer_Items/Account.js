import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, List, ListItem, Divider, ListItemText, IconButton, Toolbar, Typography } from '@material-ui/core';
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
    divider: {
        width: "709px",
        margin: 15,
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
    resp: {
        marginLeft: '15%'
    }
}))
const Account = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    }

    // const drawerItems = (
    //     <>
    //         <button className={classes.drawerButton}><i className="	fa fa-arrow-left" onClick={openHandler}></i> &nbsp;&nbsp;
    //      Settings</button>
    //         <List disablePadding className={classes.drawer}>
    //             <ListItem button onClick={() => history.push("/pings/notifications")}>
    //                 <ListItemIcon><NotificationsNoneRoundedIcon color="primary" /> </ListItemIcon>
    //                 <ListItemText primary="Notifications" />
    //             </ListItem>
    //             <ListItem button onClick={() => history.push("/pings/account")}>
    //                 <ListItemIcon><AccountCircleOutlinedIcon color="primary" /> </ListItemIcon>
    //                 <ListItemText primary="Account" />
    //             </ListItem>
    //             <ListItem button onClick={() => history.push("/pings/help")}>
    //                 <ListItemIcon><HelpOutlineOutlinedIcon color="primary" /> </ListItemIcon>
    //                 <ListItemText primary="Help" />
    //             </ListItem>
    //             <ListItem button onClick={() => history.push("/pings/about")}>
    //                 <ListItemIcon><InfoOutlinedIcon color="primary" /> </ListItemIcon>
    //                 <ListItemText primary="About" />
    //             </ListItem>
    //         </List>
    //     </>
    // );

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
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Account
                  </Typography>
                </Toolbar>
            </AppBar>
            {/* <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(!open)} onOpen={() => setOpen(!open)}>
                {drawerItems}
            </SwipeableDrawer> */}

            <List disablePadding className={classes.drawer}>
                <br />
                <ListItem >
                    <ListItemText primary="Personal Information" className={classes.resp} style={{ color: "#5F00BA" }} />
                </ListItem>
                <Divider className={classes.divider} />

                <ListItem button  >
                    <ListItemText primary="Point Vault" className={classes.resp} />
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Privileges" className={classes.resp} />
                </ListItem>
            </List>
        </div>
    )
}

export default Account


