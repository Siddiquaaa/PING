import React, { useState } from 'react'
import axios from 'axios';
import logo from "../P.png";
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EAlertDanger from "./ErrorMessage/EAlertDanger";
import EAlertSuccess from "./ErrorMessage/EAlertSuccess";

const useStyles = makeStyles({
    login: {
        '@media (max-width:2200px)': {
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
        '@media all and (max-width:2200px)': {
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
            marginTop: "20px"
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
            marginTop: "10px"
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

const Signup = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [alertMessage, setalertMessage] = useState("");
    const [alert, setalert] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2000/student/signup', {
                email: email,
                name: name,
                password: password,
                password2: password2
            });
            if (res.data.msg === "Signup successful") {
                 setalertMessage("Signup success! Please activate your account by Logging In")
                 setalert(false);
                 setTimeout(() => {
                    props.history.push('/');
                  }, 2500);
            }
        } catch (err) {
            console.log(err.response)
            if (err.response.data.msg === "Email already exists") {
                console.log("Email already exists");
                setalertMessage(err.response.data.msg)
                setalert(true);
            }
            else if (err.response.data.msg === "Passwords do not match") {
                console.log("Passwords do not match");
                setalertMessage(err.response.data.msg)
                setalert(true);
                
            }
            else if (err.response.data.errors) {
                for (let i = 0; i < 1; i++) {
                    setalertMessage(err.response.data.errors[i].msg)
                }
                setalert(true);
                console.log("Your password must contain minimum 8 characters");
            }
        }
    }
    return (
        <div className={classes.login}>
            {alert && <EAlertDanger alertMessage={alertMessage} />}
            {!alert && <EAlertSuccess alertMessage={alertMessage} />}
            <img src={logo} className={classes.navbarBrand} id="logo" alt="Ping logo" />
            <Typography className={classes.TypographyStyle} variant="h4">Get Started</Typography>

            <form className={classes.forms} onSubmit={submitHandler}>
                <fieldset>
                    <p><input name="name" type="text" placeholder="Username" required
                        value={name} onChange={(e) => setName(e.target.value)} /></p>

                    <p style={{ marginTop: "12px" }}><input name="email"
                        type="email"
                        placeholder="Email-ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required /> </p>

                    <p style={{ marginTop: "12px" }}><input name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required /> </p>

                    <p style={{ marginTop: "12px" }}><input name="password"
                        type="password"
                        placeholder="Confirm password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required /> </p>

                    <p style={{ marginTop: "12px" }}> <p><input type="submit" value="Sign up" /></p></p>
                </fieldset>
            </form>
            <div className={classes.fbgm}>
                <p style={{ marginLeft: "120px", fontSize: '16px', color: "white" }}>Or </p>

                {/* <p style={{ marginTop: "6px" }}><button className={classes.fb}>Connect with Facebook</button></p> */}
                <p style={{ marginTop: "4px" }}> <button className={classes.gm}>Connect with Google</button> </p>
                <p style={{ marginLeft: "38px", marginTop: "4px" }}>
                    Already signed up?  &nbsp;
             <Link to='/' style={{ color: 'white', fontSize: '15px', textDecoration: 'none' }}>Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;

