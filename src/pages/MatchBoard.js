import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectScore,
  setCurrentAwayCountry,
  setCurrentHomeCountry,
  setScores,
} from "../app/store/score/scoreSlice";

function MatchBoard(props) {
  const currentScoreState = useSelector(selectScore);
  const [homePoints, setHomePoints] = useState(0);
  const [awayPoints, setAwayPoints] = useState(0);
  const dispatch = useDispatch();

  const handleFinishGame = () => {
    const scoreArr = currentScoreState.scores;
    const newScoreArr = [
      ...scoreArr,
      {
        homeCountry: currentScoreState.currentHomeCountry,
        awayCountry: currentScoreState.currentAwayCountry,
        homePoints,
        awayPoints,
      },
    ];

    dispatch(setScores(newScoreArr));
    dispatch(setCurrentHomeCountry(undefined));
    dispatch(setCurrentAwayCountry(undefined));
  };
  return (
    <>
      <Grid
        item
        direction={"row"}
        display={"flex"}
        flex
        style={{ padding: 10 }}
      >
        <TextField
          name="score"
          type="number"
          label={currentScoreState.currentHomeCountry}
          style={{ fontSize: 50 }}
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={homePoints}
          onChange={(e) => setHomePoints(e.target.value)}
        />
        <Typography style={{ fontSize: 30 }}>:</Typography>
        <TextField
          name="score"
          type="number"
          label={currentScoreState.currentAwayCountry}
          style={{ fontSize: 50 }}
          defaultValue={0}
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={awayPoints}
          onChange={(e) => setAwayPoints(e.target.value)}
        />
      </Grid>
      <Button
        variant="contained"
        style={{ fontSize: 25 }}
        onClick={() => handleFinishGame()}
      >
        Finish Game
      </Button>
    </>
  );
}

export default MatchBoard;
