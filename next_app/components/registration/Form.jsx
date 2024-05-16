import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Form = ({ setName, setLocation, setPhone }) => {
  console.log(setName);
  return (
    <div>
      <Grid container direction="column" spacing={1} justifyContent="center">
        <Grid item>
          <TextField
            sx={{ minWidth: 240 }}
            id="outlined-basic"
            label="氏名"
            variant="outlined"
            type="text"
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              style: { background: "white" },
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ minWidth: 240 }}
            id="outlined-basic"
            label="住所"
            variant="outlined"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            InputProps={{
              style: { background: "white" },
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ minWidth: 240 }}
            id="outlined-basic"
            label="連絡先"
            variant="outlined"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              style: { background: "white" },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export { Form };
