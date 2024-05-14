import * as React from "react";
import TextField from "@mui/material/TextField";

const ModalForm = ({ setMemberid, setName }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="社員番号"
        variant="outlined"
        type="text"
        onChange={(e) => setMemberid(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="氏名"
        variant="outlined"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default ModalForm;
