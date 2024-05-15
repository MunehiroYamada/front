import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const ModalForm = ({ setMemberid, setName }) => {
  return (
    <div>
      <Grid container spacing={1} justifyContent="center"> 
        <Grid item>
          <TextField
            id="outlined-basic"
            label="社員番号"
            variant="outlined"
            type="text"
            onChange={(e) => setMemberid(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="氏名"
            variant="outlined"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalForm;
