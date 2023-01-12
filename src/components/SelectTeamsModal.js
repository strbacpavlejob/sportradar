import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { Grid, MenuItem, Select, Typography } from "@mui/material";

export default function SelectTeamsModal(props) {
  const [countries, setCountries] = useState([]);
  const [homeCountry, setHomeCountry] = useState();
  const [awayCountry, setAwayCountry] = useState();

  const fetchData = async () => {
    const res = await axios.get("https://restcountries.com/v2/all");

    const newCountries = res.data.map((item) => item.name);
    console.log(newCountries);
    setCountries(newCountries.filter((item) => item !== undefined));
  };

  useEffect(() => {
    //getcountries
    fetchData();
  }, []);
  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>Select Teams</DialogTitle>
        <DialogContent>
          <Grid
            item
            direction={"column"}
            display={"flex"}
            flex
            style={{ padding: 10, alignItems: "center" }}
          >
            <Select
              label="Home Country"
              defaultValue={countries[0]}
              value={homeCountry}
              onChange={(e) => setHomeCountry(e.target.value)}
            >
              {countries.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <Typography style={{ fontSize: 30 }}>VS.</Typography>
            <Select
              label="Away Country"
              defaultValue={countries[0]}
              value={awayCountry}
              onChange={(e) => setAwayCountry(e.target.value)}
            >
              {countries.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Start</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
