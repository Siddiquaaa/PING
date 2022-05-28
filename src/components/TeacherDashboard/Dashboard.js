import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PingGrid from "./PingScore";
import PingScore from "./PingGrid";
import Graph from "./Graph";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '47ch',
     '@media (min-width:445px) ': {
            marginLeft: "12px",
        },
        '@media (min-width:500px) ': {
          marginLeft: "32px",
      },
      '@media (min-width:550px) ': {
        marginLeft: "80px",
    },
    '@media (min-width:650px) ': {
      marginLeft: "100px",
  },
  '@media (min-width:750px) ': {
    marginLeft: "140px",
},
'@media (min-width:850px) ': {
  marginLeft: "190px",
},
'@media (min-width:1000px) ': {
  marginLeft: "270px",
}
    // backgroundColor: theme.palette.background.paper,
  }
}));

export default function Feed({ handler}) {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <PingScore/>
    <Graph/>
    <PingGrid/>
    <br/> <br/>
    </div>
  );
}
