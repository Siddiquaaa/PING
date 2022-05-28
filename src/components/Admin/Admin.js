import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, score, rank) {
//   return { name, score, rank };
// }

// const rows = [
//   createData('Sara', 159, 6),
//   createData('Sadiya', 237, 9),
//   createData('Afrah Sameen', 262, 16),
//   createData('Cupcake', 305, 3),
//   createData('Gingerbread', 356, 4),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

export default function Admin() {
  const classes = useStyles();
  const [educators, setEducators] = useState([]);

  useEffect(() => {
    const pings = async () => {
      const res = await axios.get('http://localhost:2000/admin/analytics', { headers: { "auth-key": localStorage.getItem("token") } })
      setEducators(res.data);
    }
    pings();
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of Faculty</StyledTableCell>
            <StyledTableCell align="right">P. Score</StyledTableCell>
            <StyledTableCell align="right">Rank</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {educators.map((data, i) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                <Link to={`/admin/educator/${data._id}`}>{data.name}</Link>
              </StyledTableCell>
              <StyledTableCell align="right">{data.score}</StyledTableCell>
              <StyledTableCell align="right">{i + 1}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

