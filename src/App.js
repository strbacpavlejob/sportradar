import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { selectScore } from "./app/store/score/scoreSlice";
import MainManu from "./pages/MainManu";
import MatchBoard from "./pages/MatchBoard";
import ScoreBoard from "./pages/ScoreBoard";

function App() {
  const currentScoreState = useSelector(selectScore);
  const renderPage = () => {
    const isPlaying =
      currentScoreState.currentHomeCountry &&
      currentScoreState.currentAwayCountry;

    if (isPlaying) {
      return <MatchBoard />;
    }
    if (currentScoreState.isMainManu) {
      return <MainManu />;
    } else {
      return <ScoreBoard />;
    }
  };

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
          {renderPage()}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
