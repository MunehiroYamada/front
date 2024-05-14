import * as React from "react";
import TextField from "@mui/material/TextField";

const Form = ({ setName, setLocation, setPhone }) => {
  console.log(setName);
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="氏名"
        variant="outlined"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <TextField 
          id="outlined-basic"
          label="住所"
          variant="outlined"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="連絡先"
          variant="outlined"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export { Form };
