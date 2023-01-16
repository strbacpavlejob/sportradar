import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsMainManu } from "../app/store/score/scoreSlice";
import SelectTeamsModal from "../components/SelectTeamsModal";

function MainManu() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="contained"
        style={{ fontSize: 25 }}
        onClick={() => setOpen(true)}
      >
        New Game
      </Button>
      <Button
        variant="text"
        style={{ fontSize: 25 }}
        onClick={() => dispatch(setIsMainManu(false))}
      >
        Scoreboard
      </Button>
      <SelectTeamsModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default MainManu;
