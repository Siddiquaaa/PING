import React from 'react';
import Button from '@material-ui/core/Button';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DialogList from "../DialogList";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props}/>
    </Draggable>
  );
}
const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  root: {
    width: '100%',
    maxWidth: '47ch',
  }
}));

export default function DialogPing(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          <WbIncandescentIcon style={{ fontSize: '50px', color: "yellow", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
        </DialogTitle>
        <DialogContent>
          <List className={classes.root}>
          { props.pingsList1 && props.pingsList1.map((list) => <DialogList key={list._id} list={list} />)}
          </List>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
