import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DialogPing from './Dialog/DialogPing';
import DialogPing2 from './Dialog/DialogPing2';
import DialogPing3 from './Dialog/DialogPing3';
import DialogPing4 from './Dialog/DialogPing4';
import DialogPing5 from './Dialog/DialogPing5';
import DialogPing6 from './Dialog/DialogPing6';
import DialogPing7 from './Dialog/DialogPing7';
import DialogPing8 from './Dialog/DialogPing8';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "50px",
        // marginLeft:'5px'
        // left: '50%',
        // marginleft: '-250px',
        '@media (min-width:429px)': {
            marginLeft: "8px",
        },
        // '@media (min-width:429px) ': {
        //     marginLeft: "27px",
        //     left: '50%',

        // }
    },
    root1: {
        marginTop: "20px"
    }
}));

function PingGrid() {
    const classes = useStyles();
    const spacing = 2;
    const [value, setValue] = useState({});
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);

    const [pingsList, setPingsList] = useState({})
    // const [pingsList1, setPingsList1] = useState([]);

    const { eduId } = useParams();
    console.log(eduId);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClickOpen5 = () => {
        setOpen5(true);
    };
    const handleClickOpen6 = () => {
        setOpen6(true);
    };
    const handleClickOpen7 = () => {
        setOpen7(true);
    };


    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
        setOpen7(false);
    };

    useEffect(() => {
        const pings = async () => {
            const res = await axios.get(`http://localhost:2000/ping/individualCount${eduId ? `?eduId=${eduId}` : ""}`, { headers: { "auth-key": localStorage.getItem("token") } })
            const res1 = await axios.get(`http://localhost:2000/ping/individual${eduId ? `?eduId=${eduId}` : ""}`, { headers: { "auth-key": localStorage.getItem("token") } })
            setPingsList(res1.data);
            setValue(res.data);
        }
        pings();
    }, [])

    return (
        <div>

            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        <Grid key={0} item >
                            <Badge badgeContent={value.red} color="secondary">
                                <WbIncandescentIcon onClick={handleClickOpen} style={{ fontSize: '55px', color: "red", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
                            </Badge>
                        </Grid>
                        <DialogPing open={open} handleClose={handleClose} pingsList1={pingsList.red} />
                        <Grid key={1} item >
                            <Badge badgeContent={value.orange} color="secondary">
                                <WbIncandescentIcon onClick={handleClickOpen1} style={{ fontSize: '55px', color: "orange", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
                            </Badge>
                        </Grid>
                        <DialogPing2 open={open1} handleClose={handleClose} pingsList1={pingsList.orange} />
                        <Grid key={2} item >
                            <Badge badgeContent={value.yellow} color="secondary">
                                <WbIncandescentIcon onClick={handleClickOpen2} style={{ fontSize: '55px', color: "yellow", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
                            </Badge>
                        </Grid>
                        <DialogPing3 open={open2} handleClose={handleClose} pingsList1={pingsList.yellow} />
                        <Grid key={3} item>
                            <Badge badgeContent={value.blue1} color="secondary">
                                <WbIncandescentIcon onClick={handleClickOpen3} style={{ fontSize: '55px', color: "rgb(102, 102, 255)", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
                            </Badge>
                        </Grid>
                        <DialogPing4 open={open3} handleClose={handleClose} pingsList1={pingsList.blue1} />
                    </Grid>

                    <Grid container justify="center" spacing={spacing} className={classes.root1}>
                        <Grid key={0} item>
                            <Badge badgeContent={value.golden} color="secondary">
                                <i className="fas fa-star" onClick={handleClickOpen4} style={{ fontSize: '45px', color: "rgb(212, 175, 56)", paddingLeft: "8px" }}></i>
                            </Badge>
                        </Grid>
                        <DialogPing5 open={open4} handleClose={handleClose} pingsList1={pingsList.golden} />
                        <Grid key={1} item >
                            <Badge badgeContent={value.silver} color="secondary">
                                <i className="fas fa-star" onClick={handleClickOpen5} style={{ fontSize: '45px', color: "rgb(190, 194, 203)", paddingLeft: "8px" }}></i>
                            </Badge>
                        </Grid>
                        <DialogPing6 open={open5} handleClose={handleClose} pingsList1={pingsList.silver} />
                        <Grid key={2} item >
                            <Badge badgeContent={value.blue2} color="secondary">
                                <i className="fas fa-star" onClick={handleClickOpen6} style={{ fontSize: '45px', color: "rgb(150, 218, 224)", paddingLeft: "8px" }}></i>
                            </Badge>
                        </Grid>
                        <DialogPing7 open={open6} handleClose={handleClose} pingsList1={pingsList.blue2} />
                        <Grid key={3} item>
                            <Badge badgeContent={value.green} color="secondary">
                                <i className="fas fa-star" onClick={handleClickOpen7} style={{ fontSize: '45px', color: "rgb(22, 223, 42)", paddingLeft: "8px" }}></i>
                            </Badge>
                        </Grid>
                        <DialogPing8 open={open7} handleClose={handleClose} pingsList1={pingsList.green} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PingGrid
