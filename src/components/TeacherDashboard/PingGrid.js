import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        left: '50%',
        marginleft: '-250px',
        '@media (min-width:400px) and (max-width:428px)': {
            marginLeft: "8px",
            left: '50%',

        },
        '@media (min-width:429px) ': {
            marginLeft: "27px",
            left: '50%',

        }
    },
    root1: {
        // position: 'fixed',

    },
    paper: {
        height: 105,
        width: 105,
        borderRadius: '10px 10px 10px 10px',
        marginTop: '30px',
        "&:focus": {
            backgroundColor: "blue"
        }
    },
    ping: {
        display: 'table',
        right: '50%',
        marginTop: '4px',
        marginLeft: '76%',
        // bottom: '2%',
        // margin: '0 auto',
        // position: 'fixed',
        transform: 'rotate(360deg)',
        textAlign: 'center',
        textDecoration: 'none'
    }
}));

function PingGrid() {
    const classes = useStyles();
    const spacing = 2;
    const [count, setCount] = useState({});
    const [pingScore, setPingScore] = useState(0);
    const { eduId } = useParams();

    useEffect(() => {
        const pings = async () => {
            const res = await axios.get(`http://localhost:2000/ping/profile${eduId ? `?eduId=${eduId}` : ""}`, { headers: { "auth-key": localStorage.getItem("token") } })
            const res1 = await axios.get(`http://localhost:2000/ping/score${eduId ? `?eduId=${eduId}` : ""}`, { headers: { "auth-key": localStorage.getItem("token") } })
            setCount(res.data);
            setPingScore(res1.data.pingScore);
        }
        pings();
    }, [])

    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={29} className={classes.root1}>
                    <Grid container justify="center" spacing={spacing} >
                        <Grid key={0} item>
                            <Paper className={classes.paper}>
                                <Typography variant="body1" align="center" color="primary" style={{ paddingTop: "10px" }}><b>Total</b></Typography>
                                <Fab color="primary" size="large" aria-label="add" className={classes.ping} >
                                    <Typography variant="h4" style={{ color: 'rgb(214, 255, 121)' }}>{count.count}</Typography>
                                </Fab>
                            </Paper>
                        </Grid>
                        <Grid key={1} item >
                            <Paper className={classes.paper}>
                                <Typography variant="body1" align="center" color="primary" style={{ paddingTop: "10px" }}><b>Ping Score</b></Typography>
                                <Fab color="primary" size="large" aria-label="add" className={classes.ping} >
                                    <Typography variant="h4" style={{ color: 'rgb(214, 255, 121)' }}>{pingScore}</Typography>
                                </Fab>
                            </Paper>
                        </Grid>
                        <Grid key={2} item >
                            <Paper className={classes.paper}>
                                <Typography variant="body1" align="center" color="primary" style={{ paddingTop: "10px" }}><b>Unresolved</b></Typography>
                                <Fab color="primary" size="large" aria-label="add" className={classes.ping} >
                                    <Typography variant="h4" style={{ color: 'rgb(214, 255, 121)' }}>{count.unresolved}</Typography>
                                </Fab>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PingGrid
