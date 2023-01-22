import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectScore,
  setCurrentAwayCountry,
  setCurrentHomeCountry,
} from "../app/store/score/scoreSlice";

export default function SelectTeamsModal(props) {
  const [countries, setCountries] = useState([]);
  const [homeCountry, setHomeCountry] = useState();
  const [awayCountry, setAwayCountry] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();
  const currentScoreState = useSelector(selectScore);

  const fetchData = async () => {
    const res = await axios.get("https://restcountries.com/v2/all");

    const newCountries = res.data.map((item) => item.name);
    console.log(newCountries);
    const filteredCountries = newCountries.filter((item) => item !== undefined);
    setCountries(filteredCountries);
  };

  const checkPreviousMatch = () => {
    const filtredScore = currentScoreState.scores.find(
      (item) =>
        (item.homeCountry === homeCountry &&
          item.awayCountry === awayCountry) ||
        (item.homeCountry === awayCountry && item.awayCountry === homeCountry)
    );
    return filtredScore !== undefined;
  };

  useEffect(() => {
    //getcountries
    fetchData();
  }, []);

  useEffect(() => {
    setIsDisabled(checkPreviousMatch());
  }, [homeCountry, awayCountry]);

  const handleSaveTeam = () => {
    dispatch(setCurrentHomeCountry(homeCountry));
    dispatch(setCurrentAwayCountry(awayCountry));
    props.handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        fullWidth
        maxWidth="sm"
        onClose={props.handleClose}
      >
        <DialogTitle>Select Teams</DialogTitle>
        <DialogContent>
          <Grid
            item
            direction={"column"}
            display={"flex"}
            flex
            style={{ padding: 10, alignItems: "center" }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Home Country
              </InputLabel>
              <Select
                fullWidth
                label="Home Country"
                value={homeCountry}
                onChange={(e) => setHomeCountry(e.target.value)}
              >
                {countries
                  .filter((item) => item !== awayCountry)
                  .map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Typography style={{ fontSize: 30 }}>VS.</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Away Country
              </InputLabel>
              <Select
                fullWidth
                label="Away Country"
                value={awayCountry}
                onChange={(e) => setAwayCountry(e.target.value)}
              >
                {countries
                  .filter((item) => item !== homeCountry)
                  .map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {isDisabled && (
              <FormHelperText error style={{ paddingTop: 20, fontSize: 15 }}>
                Selected countries have already played
              </FormHelperText>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleSaveTeam();
            }}
            disabled={isDisabled}
          >
            Start
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
