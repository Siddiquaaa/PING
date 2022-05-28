import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Divider,List, ListItem, ListItemText, IconButton, Toolbar, Typography } from '@material-ui/core';
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
    divider: {
        width: "770px",
        margin: 13,
      },
    resp:{
        marginLeft: '15%'
    }
}))
const Help = (props) => {
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
                        Help
                  </Typography>
                </Toolbar>
            </AppBar>

            <List disablePadding className={classes.drawer}>
                <br/>  
                <ListItem >
                <ListItemText primary="FAQ" className={classes.resp}/>
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button  >
                    <ListItemText primary="Help Center" className={classes.resp}/>
                </ListItem>
                {/* <Divider className={classes.divider}/> */}
                <ListItem button >
                    <ListItemText primary="App Info" className={classes.resp}/>
                </ListItem>
                {/* <Divider className={classes.divider}/> */}

            </List>
        </div>
    )
}

export default Help


