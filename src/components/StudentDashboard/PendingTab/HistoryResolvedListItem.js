import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
      }
 }));

const PendingListItemH = ({list}) => {
const classes = useStyles();
    return (
        <ListItem alignItems="flex-start" >
          {list.fbPingType ? <ListItemIcon ><StarRoundedIcon style={{color:`${list.fbPingColor}`}} fontSize="large"/> </ListItemIcon> : <ListItemIcon ><EmojiObjectsIcon fontSize="large"/> </ListItemIcon>}
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="primary"
              >
                {list.eduId.name}
              </Typography><br/>
              <Typography component="span"
                variant="body2" display="block">{list.comment}</Typography>
                {/* {list.date.slice(0,10)} */}
            </React.Fragment>
          }
        />
      </ListItem>
    )
}


export default PendingListItemH
