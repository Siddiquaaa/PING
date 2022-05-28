import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactGA from 'react-ga';
// import files
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin/Admin';
import Ping from './StudentDashboard/Ping';
import Home from "./TeacherDashboard/Home";
import PGrid from './StudentDashboard/PGrid';
// import drawer files
import Notifications from "./drawer_Items/Notifications"
import Account from "./drawer_Items/Account"
import Help from "./drawer_Items/Help"
import About from "./drawer_Items/About"

import { Switch, Route } from 'react-router-dom';

function App() {
  const [loginStatus, setloginStatus] = useState("NOT_LOGGED_IN");
  const [role, setRole] = useState("");

  const handler = () => {
    setloginStatus("NOT_LOGGED_IN");
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      const res = await axios.get("http://localhost:2000/user", { headers: { "auth-key": localStorage.getItem("token") } })
      if (res.data.msg === "Auth success") {
        setloginStatus("LOGGED_IN");
        setRole(res.data.user.role);
      }
      else if (res.data.msg !== "Auth success") {
        setloginStatus("NOT_LOGGED_IN");
        console.log('not authenticated')
      }
      else
        console.log("User logged out");
    }
    checkLoginStatus();
    reactGA.initialize('UA-188486601-1')
    //to report page view
    reactGA.pageview(window.location.pathname + window.location.search)
  }, [loginStatus, role])

  return (
    <>
      <Switch>

        {role === "educator" || role === 'admin' ?
          <Route exact path="/educator" render={(props) => {
            return (
              <Home {...props} loginStatus={loginStatus} handler={handler} />
            )
          }} /> :
          <Route exact path="/pings" render={(props) => {
            return (
              <Ping {...props} loginStatus={loginStatus} handler={handler} />
            )
          }} />
        }

        {role === "admin" ?
          <Route exact path="/admin" render={(props) => {
            return (
              <Admin {...props} loginStatus={loginStatus} handler={handler} />
            )
          }} /> :
          <Route exact path="/" render={(props) => {
            return (
              <Login {...props} loginStatus={loginStatus} setloginStatus={setloginStatus} />
            )
          }} />
        }

        {role === "admin" ?
          <Route exact path="/admin/educator/:eduId" render={(props) => {
            return (
              <Home {...props} loginStatus={loginStatus} handler={handler} />
            )
          }} /> :
          <Route exact path="/" render={(props) => {
            return (
              <Login {...props} loginStatus={loginStatus} setloginStatus={setloginStatus} />
            )
          }} />
        }

        <Route exact
          path={'/'}
          render={props => (
            <Login {...props} loginStatus={loginStatus} setloginStatus={setloginStatus} />
          )} />

        <Route exact path="/ping-lecturer" render={(props) => {
          return (
            <PGrid {...props} loginStatus={loginStatus} handler={handler} />
          )
        }} />
        <Route exact path="/pings/account" render={props => <Account {...props} />} />
        <Route exact path="/pings/notifications" render={props => <Notifications {...props} />} />
        <Route exact path="/pings/help" render={props => <Help {...props} />} />
        <Route exact path="/pings/about" render={props => <About {...props} />} />

        <Route exact
          path={'/signup'}
          render={props => (
            <Signup {...props} loginStatus={loginStatus} />
          )} />

      </Switch>
    </>
  );
}

export default App;
