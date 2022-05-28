import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { List} from '@material-ui/core';
import FeedListItem from "./FeedListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '47ch',
    // backgroundColor: theme.palette.background.paper,
  }
}));

export default function Feed({ handler}) {
  const classes = useStyles();
  const [pingsList, setpingsList] = useState([]);
  const { eduId } = useParams();

  useEffect(() => {
    const pings = async () => {
      const res = await axios.get(`http://localhost:2000/ping/profile${eduId ? `?eduId=${eduId}` : ""}`, { headers: { "auth-key": localStorage.getItem("token") } })
      setpingsList(res.data.profile);
    }
    pings();
  }, [])

  return (
    <div className={classes.root}>
      <List className={classes.root}>
        {pingsList.map((list) => <FeedListItem key={list._id} list={list} />)}
      </List>
    </div>
  );
}
