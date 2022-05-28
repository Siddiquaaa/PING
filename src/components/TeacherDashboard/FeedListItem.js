import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
      }
 }));

const FeedListItem = ({list}) => {
const classes = useStyles();
    return (
        <ListItem alignItems="flex-start" >
          {list.fbPingType ? <ListItemIcon ><StarRoundedIcon style={{color:`${list.fbPingColor}`}} fontSize="large"/> </ListItemIcon> : <ListItemIcon ><WbIncandescentIcon style={{color:`${list.fbPingColor}`, transform: "rotate(180deg)"}} fontSize="large"/> </ListItemIcon>}
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="inherit"
                className={classes.inline}
              >
                {list.comment}
              </Typography> <br/>
              <Typography variant="caption" color="primary">{list.date.slice(0,10)}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    )
}


export default FeedListItem
