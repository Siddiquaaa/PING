import React,{useState} from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
      }
 }));

const PendingListItem = ({list}) => {
const classes = useStyles();
const [open, setopen] = useState(true)
const id = `${list._id}`;

const hideData = ()=>{
  setopen(false);
}

const resolvePing=async()=>{
  await axios.post(`http://localhost:2000/ping/resolve/${id}`,null,{ headers: { "auth-key": localStorage.getItem("token") } })
}
    return (
    <div>
    { open ?  <ListItem alignItems="flex-start" >
      <ListItemIcon onClick={hideData}><WbIncandescentIcon onClick={resolvePing} style={{color:`${list.fbPingColor}`, transform: "rotate(180deg)"}} fontSize="large"/> </ListItemIcon>
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
              </React.Fragment>
            }
          />
        </ListItem> : null }
    </div>
    )
}


export default PendingListItem
