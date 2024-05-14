import axios from "axios";

import ModalForm from "./ModalForm";
import { useState } from "react";
import Button from '@mui/material/Button';

const Search = ({ setMemberState }) => {
  const [memberid, setMemberid] = useState("");
  const [name, setName] = useState("");

  const data = {
    memberid: memberid,
    name: name,
  };

  const Searching = async () => {
    try {
      const result = await axios.post("http://localhost:4000/search", data);
      setMemberState(result.data)
    } catch (error) {
      console.error("failed:", error.message);
    }
  };

  return (
    <div>
      <ModalForm setMemberid={setMemberid} setName={setName} />
      <Button variant="contained" button onClick={Searching}>検索する</Button>
    </div>
  );
};

export default Search;
