import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// import Switch from '@material-ui/core';

// const Theme = (props) => {
//   return (
//     <div>
//     Hi
//       <Switch checked={props.darkMode} onChange={()=> props.setDarkMode(!props.darkMode)} color = "primary"/>
//   </div>
//   )
// }

const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: 'linear-gradient(180deg, red 0%, blue 100%)'
    },
    primary: {
      main: '#5F00BA',
      constrastText:'#ffffff',
      mainGradient: "linear-gradient(270deg, rgb(184 154 255) 0%, rgb(250, 172, 168) 60%)",
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
      contrastText: "#ffffff"
    },
    // error : {
    //   main: '#ffffff'
    // }
  }
});

export default theme;
