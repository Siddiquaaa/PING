import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AppBar, Button,IconButton, Toolbar, Typography,SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NavTab from "../TeacherDashboard/NavTab";
import theme from "../Theme";
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

const Home = (props) => {
    const {history} = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState({});
   
    const listPings = async () => {
        const res = await axios.get('http://localhost:2000/user', { headers: { "auth-key": localStorage.getItem('token') } })
        //context api or redux
        setName(res.data.user);
    }

    useEffect(() => {
        console.log(props.loginStatus);
        listPings();
    },[props.loginStatus])

    const openHandler = () => {
        setOpen(!open);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");    
        history.push('/');
      }

    const drawerItems = (
        <>
            <button className={classes.drawerButton}><i className="	fa fa-arrow-left" onClick={openHandler}></i> &nbsp;&nbsp;
         Settings</button>
            <List disablePadding className={classes.drawer}>
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
                   <b> {name.name} </b> 
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
                </Toolbar>
            </AppBar>
            <NavTab />
            <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(!open)} onOpen={() => setOpen(!open)}>
                {drawerItems}
            </SwipeableDrawer>
        </div>
    )
}

export default Home;
