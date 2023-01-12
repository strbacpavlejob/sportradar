import { Grid } from "@mui/material";
import MainManu from "./pages/MainManu";
import ScoreBoard from "./pages/ScoreBoard";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        flex={1}
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          flex={1}
          display={"flex"}
          style={{ minHeight: "100vh" }}
        >
          <MainManu />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
