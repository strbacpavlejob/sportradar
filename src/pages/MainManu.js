import { Button } from "@mui/material";
import { useState } from "react";
import SelectTeamsModal from "../components/SelectTeamsModal";

function MainManu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        style={{ fontSize: 25 }}
        onClick={() => setOpen(true)}
      >
        New Game
      </Button>
      <Button variant="text" style={{ fontSize: 25 }}>
        Scoreboard
      </Button>
      <SelectTeamsModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default MainManu;
