import React, { useState } from 'react'
import axios from 'axios';
import logo from "../P.png";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import EAlertDanger from "./ErrorMessage/EAlertDanger"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    login: {
        '@media (max-width:2100px)': {
            display: 'table',
            margin: '0 auto',
        },
        background: "linear-gradient(180deg, rgb(184 154 255) 0%, rgb(250, 172, 168) 80%)",
        height: "100vh",
        width: "100vw"
    },
    navbarBrand: {
        height: 'auto',
        display: 'table',
        margin: '0 auto',
        marginTop: '50px',
        '@media all and (max-width:2100px)': {
            // background: 'url(PATH_TO_IMG}/logo_small.png) no-repeat center',
            width: '35%',
            height: 'auto',
            display: 'table',
            marginTop: '50px',
            margin: '0 auto'
        }
    },
    TypographyStyle: {
        color: "white",
        fontFamily: 'Arial',
        fontSize: '36px',
        '@media (max-width:2200px)': {
            display: 'table',
            margin: '0 auto',
            height: 'auto',
            marginTop: "10px"
        }
    },
    forms: {
        '@media (max-width:2200px)': {
            display: 'table',
            margin: '0 auto',
            marginTop: "10px"
        }
    },
    fbgm: {
        '@media (max-width:2200px)': {
            display: 'table',
            margin: '0 auto',
            marginTop: "5px"
        }
    },
    fb: {
        background: '#0079ce',
        border: 'none',
        borderRadius: '0px 3px 3px 0px',
        color: '#f4f4f4',
        cursor: 'pointer',
        height: '45px',
        textTransform: 'uppercase',
        width: '250px',
        // marginLeft: "2px"
    },
    gm: {
        background: '#EA4335',
        border: 'none',
        borderRadius: '0px 3px 3px 0px',
        color: '#f4f4f4',
        cursor: 'pointer',
        height: '45px',
        textTransform: 'uppercase',
        width: '250px',
    }
});

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setalertMessage] = useState("");
    const [alert, setalert] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2000/login', {
                email: email,
                password: password
            });
            if (res.data.auth === true) {
                props.setloginStatus("LOGGED_IN");
                console.log(res.data);
                // let store=[];
                // store.push(res.data.role)
                // store.push(res.data.token);
                // console.log(store);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("user",res.data.role);
                if(localStorage.getItem("user") === "student")
                props.history.push('/pings');
                if(localStorage.getItem("user") === "educator")
                props.history.push('/educator')
                if(localStorage.getItem("user") === "admin")
                props.history.push('/admin');
            }
        } catch (err) {
            if (err.response.data.errors) {
                for (let i = 0; i < 1; i++) {
                    setalertMessage(err.response.data.errors[i].msg)
                }
                setalert(true);
            }
            else if (err.response) {
                setalertMessage(err.response.data.msg)
                setalert(true);
            }
        }

    }
    // useEffect(() => {
    //     setalertMessage("Signup successful!")
    // })
    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     axios.post("/login", {
    //         email: email,
    //         password: password
    //       })
    //     .then((res)=>{
    //         if(res.data.msg === "Auth successful"){
    //             // this.props.successfulAuth(res.data); 
    //             console.log(res.data);
    //         }
    //     })
    //     .catch((err)=> {
    //         console.log("Authentication failed");
    //     });
    // }

    return (
        <div className={classes.login}>
            {alert && <EAlertDanger alertMessage={alertMessage} />}
            <img src={logo} className={classes.navbarBrand} id="logo" alt="Ping logo" />
            <Typography className={classes.TypographyStyle} variant="h4">Welcome</Typography>

            <form className={classes.forms} onSubmit={submitHandler}>
                <fieldset>
                    <p><input name="email" type="text" placeholder="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} /></p>

                    <p style={{ marginTop: "12px" }}><input name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required /> </p>

                    <p style={{ marginTop: "12px" }}> <p><input type="submit" value="Log in" /></p></p>
                </fieldset>
            </form>
            <div className={classes.fbgm}>
                <p style={{ marginLeft: "120px", fontSize: '16px', color: "white" }}>Or </p>

                {/* <p style={{ marginTop: "6px" }}><button className={classes.fb}>Connect with Facebook</button></p> */}
                <p style={{ marginTop: "4px" }}> <button className={classes.gm}>Connect with Google</button> </p>
                <p style={{ marginLeft: "38px", marginTop: "4px" }}>
                    First Time Here?  &nbsp;
             <Link to='/signup' style={{ color: 'white', fontSize: '15px', textDecoration: 'none' }}>Sign up</Link>
                </p>
            </div>
        </div>
    )
}



export default Login;
