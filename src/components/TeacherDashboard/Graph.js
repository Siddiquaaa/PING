import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import { LineChart, Line, Tooltip, Legend, CartesianGrid, XAxis, YAxis} from 'recharts';

const useStyles = makeStyles((theme) => ({
    root1: {
        marginLeft: '40px',
        '@media (max-width:418px)': {
            marginLeft: '20px'
        },
        '@media (max-width:397px)': {
            marginLeft: '5px'
        },
        '@media (max-width:362px)': {
            marginLeft: '20px'
        }
    }
}));

const Graph = () => {
    const classes = useStyles();
    const [data, setData]= useState([]);

    useEffect(() => {
        const pings = async () => {
          const res = await axios.get('http://localhost:2000/ping/data', { headers: { "auth-key": localStorage.getItem("token") } })
          setData(res.data);
        }
        pings();
      }, [])

    const isiphone = useMediaQuery({ query: '(max-width: 362px)' })
    return (
        <div>
            {isiphone ? <LineChart width={430} height={250} data={data}
                className={classes.root1}
                margin={{ top: 35, right: 170, left: -35, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend iconType='square' />
                <Line type="monotone" dataKey="star" stroke="#5F00BA" />
                <Line type="monotone" dataKey="bulb" stroke="rgb(245, 119, 112)" />
            </LineChart> :
                <LineChart width={430} height={250} data={data}
                    className={classes.root1}
                    margin={{ top: 35, right: 110, left: -35, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"/>
                    <YAxis />
                    <Tooltip />
                    <Legend iconType='square' />
                    <Line type="monotone" dataKey="star" stroke="#5F00BA" />
                    <Line type="monotone" dataKey="bulb" stroke="rgb(245, 119, 112)" />
                </LineChart>
            }
        </div>
    )
}

export default Graph

