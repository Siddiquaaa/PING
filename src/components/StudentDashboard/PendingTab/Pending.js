import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { List,Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";

import PendingListItem from "./PendingListItem";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '47ch',
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  ping: {

    display: 'table',
    right: '50%',
    marginRight: '-47%',
    bottom: '2%',
    margin: '0 auto',
    position: 'absolute',
    transform: 'rotate(360deg)',
    textAlign: 'center',
    textDecoration: 'none'
  },

}));

export default function Pending({ handleResolve }) {
  const classes = useStyles();
  const [pingsList, setpingsList] = useState([]);

  useEffect(() => {
    const pings = async () => {
      const res = await axios.get('http://localhost:2000/ping/pending', { headers: { "auth-key": localStorage.getItem("token") } })
      setpingsList(res.data);
    }
    pings();
  }, [])

  return (
    <div>
      <List className={classes.root}>
        {pingsList.map((list) => <PendingListItem key={list._id} list={list}/>)}
      </List>
      <Link to="/ping-lecturer">
        <Fab color="primary" size="large" aria-label="add" className={classes.ping}>
          <Typography variant="h4" style={{ color: 'rgb(214, 255, 121)' }}>P</Typography>
        </Fab>
      </Link>
    </div>
  );
}
