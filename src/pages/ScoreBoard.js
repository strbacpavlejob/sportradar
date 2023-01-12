import { Button, Grid, TextField, Typography } from "@mui/material";

function ScoreBoard() {
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
          label="Home"
          style={{ fontSize: 50 }}
          defaultValue={0}
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
        <Typography style={{ fontSize: 30 }}>:</Typography>
        <TextField
          name="score"
          type="number"
          label="Away"
          style={{ fontSize: 50 }}
          defaultValue={0}
          InputProps={{ inputProps: { min: 0, max: 10 } }}
        />
      </Grid>
      <Button variant="contained" style={{ fontSize: 25 }}>
        Finish Game
      </Button>
      <Button variant="text" style={{ fontSize: 25 }}>
        Scoreboard
      </Button>
    </>
  );
}

export default ScoreBoard;
