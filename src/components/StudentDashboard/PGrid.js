import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
// import withStyles from "@material-ui/core/styles/withStyles"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { Divider } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import RTooltip from "../ToolTips/RTooltip"
import OTooltip from "../ToolTips/OToolTip"
import YTooltip from "../ToolTips/YToolTip"
import BTooltip from "../ToolTips/BToolTip"
import GTooltip from "../ToolTips/GToolTip"
import STooltip from "../ToolTips/SToolTip"
import GgTooltip from "../ToolTips/GgToolTip"
import BbTooltip from "../ToolTips/BbToolTip"
import EAlertDanger from "../ErrorMessage/EAlertDanger"
// import "../App.css"


const useStyles = makeStyles((theme) => ({
  root2: {
    background: "linear-gradient(280deg, rgb(184 154 255) 0%, rgb(250, 172, 168) 80%)",
    height: "100vh",
    width: "100vw"
  },
  root: {
    flexGrow: 1
    // maxWidth: '1200px',
    // margin: '0 auto',
    // display: 'grid',
    // gridGap: '1rem',
    // '@media (minWidth: 900px)': {
    //   cards: { gridTemplateColumns: 'repeat(3, 1fr)' }
    // },
  },
  roots: {
    padding: '2px 2px',
    border: '1px solid rgb(184 154 255)',
    borderRadius: '40px',
    display: 'flex',
    left: '50%',
    marginLeft: '-49.5%',
    bottom: '0%',
    position: 'absolute',
    width: '99%',
    '@media (max-width:1200px)': {
      boxSizing: 'border-box',
      marginTop: 0
    },
  },
  input1: {
    marginTop: '50px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-110px',

  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 12,
  },
  divider: {
    height: 42,
    margin: 5,
  },
  root1: {
    marginTop: "-130px"
  },
  paper: {
    height: 85,
    width: 65,
    borderRadius: '10px 10px 10px 10px',
    marginTop: '170px',
    "&:focus": {
      backgroundColor: "blue"
    }
    // backgroundColor: show => (show ? "white" : "#fae9ec")
    // backgroundColor: 'green'
  },
  //   buttons:{
  //     :focus:{
  //     outline: 0,
  //     backgroundColor: 'green'
  //   }
  // },
  focused: {
    // outline: 0,
    backgroundColor: 'green'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function PGrid(props) {
  const classes = useStyles();
  const spacing = 2;

  const [initialState, setState] = useState({ clicked: false, clickeds: false });
  const [educator, setEducator] = useState("");
  const [comment, setComment] = useState("")
  const [fbPingColor, setfbPingColor] = useState("")
  const [fbPingType, setfbPingType] = useState(0)
  const [alertMessage, setalertMessage] = useState("");
  const [alert, setalert] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [educators, setEducators] = useState([]);

  useEffect(() => {
    // fetch teachers name and _id
    const getEducators = async () => {
      const res = await axios.get('http://localhost:2000/ping/educatorId', { headers: { "auth-key": localStorage.getItem("token") } })
      setEducators(res.data);
    }
    getEducators();
  }, [])

  const pingHandler = () => {
    axios.post('http://localhost:2000/ping', {
      eduId: educator,
      comment: comment,
      fbPingColor: fbPingColor,
      fbPingType: fbPingType,
      resolved: resolved
    }, { headers: { "auth-key": localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data)
        props.history.push('/pings');
      }).catch((error) => {
        if (error.response.data.errors) {
          console.log(error.response.data);
          for (let i = 0; i < 1; i++) {
            setalertMessage(error.response.data.errors[i].msg)
          }
          setalert(true);
        }
        else if (error.response.data) {
          setalertMessage(error.response.data.msg)
          setalert(true);
        }
      })
  }

  const handleFocus = () => {
    initialState.clicked = (!initialState.clicked);
    setState(initialState)
  }

  const onChange = (e) => {
    setEducator(e.target.value);
  }

  return (
    <div className={classes.root2}>
      {alert && <EAlertDanger alertMessage={alertMessage} />}
      {/* <TextField id="outlined-basic" value={lecturer} label="Lecturer" variant="outlined" className={classes.input1}
        onChange={(e) => setLecturer(e.target.value)} /> */}
      <select name="educator" onChange={onChange} defaultValue={" "}>
        <option value=" " disabled selected>Select an Educator</option>
        {educators && educators.map((l, i) => (<option value={l._id} key={i}>{l.name}</option>))}
      </select>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing} >
            <Grid key={0} item>
              <Paper className={classes.paper} elevation={initialState.clicked ? "22" : "100"} style={{backgroundColor: fbPingType === 0 && fbPingColor === "red" ? "blue" : "white" }} onClick={handleFocus}>
                <RTooltip />
                <WbIncandescentIcon onClick={() => { setfbPingColor("red"); setfbPingType(0); setResolved(false) }} style={{ fontSize: '55px', color: "red", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
              </Paper>
            </Grid>
            <Grid key={1} item >
              <Paper className={classes.paper} elevation={initialState.clickeds ? "22" : "100"} style={{backgroundColor: fbPingType === 0 && fbPingColor === "orange" ? "blue" : "white" }} onClick={handleFocus}>
                <OTooltip />
                <WbIncandescentIcon onClick={() => { setfbPingColor("orange"); setfbPingType(0); setResolved(false) }} style={{ fontSize: '55px', color: "orange", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)"}}></WbIncandescentIcon>
              </Paper>
            </Grid>
            <Grid key={2} item >
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 0 && fbPingColor === "yellow" ? "blue" : "white" }}>
                <YTooltip />
                <WbIncandescentIcon onClick={() => { setfbPingColor("yellow"); setfbPingType(0); setResolved(false) }} style={{ fontSize: '55px', color: "yellow", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
              </Paper>
            </Grid>
            <Grid key={3} item>
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 0 && fbPingColor === "rgb(102, 102, 255)" ? "blue" : "white" }} >
                <BTooltip />
                <WbIncandescentIcon onClick={() => { setfbPingColor("rgb(102, 102, 255)"); setfbPingType(0); setResolved(false) }} style={{ fontSize: '55px', color: "rgb(102, 102, 255)", marginLeft: "4.5px", marginTop: "-1px", transform: "rotate(180deg)" }}></WbIncandescentIcon>
              </Paper>
            </Grid>
          </Grid>

          <Grid container justify="center" spacing={spacing} className={classes.root1}>
            {/* {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <i className="fa fa-address-book" style={{ fontSize: '85px'}}></i>
                </Paper>
            </Grid>
          ))} */}
            <Grid key={0} item>
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 1 && fbPingColor === "rgb(212, 175, 56)" ? "blue" : "white" }}>
                <GTooltip /> 
                <i className="fas fa-star" onClick={() => { setfbPingColor("rgb(212, 175, 56)"); setfbPingType(1); setResolved(true) }} style={{ fontSize: '45px', color: "rgb(212, 175, 56)", paddingLeft: "8px" }}></i>
              </Paper>
            </Grid>
            <Grid key={1} item >
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 1 && fbPingColor === "rgb(190, 194, 203)" ? "blue" : "white" }}>
                <STooltip />
                <i className="fas fa-star" onClick={() => { setfbPingColor("rgb(190, 194, 203)"); setfbPingType(1); setResolved(true) }} style={{ fontSize: '45px', color: "rgb(190, 194, 203)", paddingLeft: "8px" }}></i>
              </Paper>
            </Grid>
            <Grid key={2} item >
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 1 && fbPingColor === "rgb(150, 218, 224)" ? "blue" : "white" }}>
                <BbTooltip />
                <i className="fas fa-star" onClick={() => { setfbPingColor("rgb(150, 218, 224)"); setfbPingType(1); setResolved(true) }} style={{ fontSize: '45px', color: "rgb(150, 218, 224)", paddingLeft: "8px" }}></i>
              </Paper>
            </Grid>
            <Grid key={3} item>
              <Paper className={classes.paper} style={{backgroundColor: fbPingType === 1 && fbPingColor === "rgb(22, 223, 42)" ? "blue" : "white" }}>
                <GgTooltip />
                <i className="fas fa-star" onClick={() => { setfbPingColor("rgb(22, 223, 42)"); setfbPingType(1); setResolved(true) }} style={{ fontSize: '45px', color: "rgb(22, 223, 42)", paddingLeft: "8px" }}></i>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Paper component="form" className={classes.roots}>
        <InputBase
          className={classes.input}
          placeholder="Comment"
          color="secondary"
          multiline={true}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        // inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={pingHandler}>
          <DirectionsIcon />
        </IconButton>
      </Paper>

      {/* { show && <PendingListItem show={show}/> } */}
    </div>
  );
}
export default PGrid