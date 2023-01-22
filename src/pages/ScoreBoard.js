import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, setIsMainManu } from "../app/store/score/scoreSlice";
import { Button } from "@mui/material";

export default function ScoreBoard() {
  const currentScoreState = useSelector(selectScore);
  const sortedScore = currentScoreState.scores
    .slice()
    .sort((a, b) => {
      return a.homePoints + a.awayPoints - (b.homePoints + b.awayPoints);
    })
    .reverse();
  const dispatch = useDispatch();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedScore.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{`${item.homeCountry} - ${item.awayCountry}: ${item.homePoints} - ${item.awayPoints}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        style={{ margin: 25, fontSize: 25 }}
        onClick={() => dispatch(setIsMainManu(true))}
      >
        Go Back
      </Button>
    </>
  );
}
