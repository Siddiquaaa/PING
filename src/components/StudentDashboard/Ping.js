import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AppBar, Button,Typography, IconButton, Toolbar, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Navtabs from "./NavTabs";
import theme from "../Theme";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        position: 'absolute',
        right: '20px',
        alignSelf: 'flex-end'

    },
    drawer: {
        width: '215px'
    },
    drawerButton: {
        background: 'linear-gradient(270deg, rgb(184 154 255) 0%, rgb(250, 172, 168) 80%)',
        border: 'none',
        fontSize: '18px',
        color: '#f4f4f4',
        paddingRight: '90px',
        paddingBottom: '10px',
        height: '60px',
    }
}));

const Ping = (props) => {
    const {history} = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState({});
    const [count1, setCount1] = useState()
    const [count2, setCount2] = useState()
    const [valueS, setValueS] = useState(5)
    const [valueB, setValueB] = useState(5)

    const listPings = async () => {
        const res1 = await axios.get('http://localhost:2000/user', { headers: { "auth-key": localStorage.getItem("token") } })
        const res2 = await axios.get('http://localhost:2000/ping/count', { headers: { "auth-key": localStorage.getItem("token") } })
        setCount1(res2.data.countBulb)
        setCount2(res2.data.countStar)
        setName(res1.data.user);
    }
    
    useEffect(() => {
        listPings();
        setValueB((5-count1 ));
        setValueS((5-count2 ));
    }, [count1, count2])

    const openHandler = () => {
        setOpen(!open);
    }

    const handleLogout = () => {
        // handler();
        localStorage.removeItem("token");
        localStorage.removeItem("user");    
        history.push('/');
      }
    const drawerItems = (
        <>
            <button className={classes.drawerButton}><i className="	fa fa-arrow-left" onClick={openHandler}></i> &nbsp;&nbsp;
         Settings</button>
            <List disablePadding className={classes.drawer}>
                <ListItem button onClick={()=> history.push("/pings/notifications")}>
                    <ListItemIcon><NotificationsNoneRoundedIcon color="primary" /> </ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItem>
                <ListItem button onClick={()=> history.push("/pings/account")}>
                    <ListItemIcon><AccountCircleOutlinedIcon color="primary" /> </ListItemIcon>
                    <ListItemText primary="Account" />
                </ListItem>
                <ListItem button onClick={()=> history.push("/pings/help")}>
                    <ListItemIcon><HelpOutlineOutlinedIcon color="primary" /> </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
                <ListItem button onClick={()=> history.push("/pings/about")}>
                    <ListItemIcon><InfoOutlinedIcon color="primary" /> </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <br/> <br/>
                <Typography align="center" color="primary" paragraph="true" variant="button">
                   <b> {name.name} </b> <br/>
                   <b>{name.email}</b>
                </Typography>
                <Button variant="contained" color="primary" onClick={handleLogout} style={{marginLeft: "60px"}}>Logout</Button>

            </List>
        </>
    );

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ background: theme.palette.primary.mainGradient }}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        onClick={openHandler}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        <Rating name="read-only" style={{color:"rgb(255, 255, 102)"}} value={valueB ? valueB : null} size="large" readOnly 
                        icon={<WbIncandescentIcon fontSize="inherit" style={{transform: 'rotate(180deg)'}}/>} />
                        <br />
                        <Rating name="read-only" style={{color:"rgb(57, 255, 20)"}} value={valueS ? valueS : null} size="large" readOnly />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Navtabs />
            <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(!open)} onOpen={() => setOpen(!open)}>
                {drawerItems}
            </SwipeableDrawer>
        </div>
    )
}

export default Ping;
