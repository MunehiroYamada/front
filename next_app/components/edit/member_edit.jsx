import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PullTitleEdit from "./PullTitle_edit";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function MemberEdit({ member, project }) {
  const [members, setMembers] = useState(member);
  const handleInputChange = (fieldName, value) => {
    const updatedMembers = { ...members, [fieldName]: value };
    setMembers(updatedMembers);
  };

  const router = useRouter();
  const update = async () => {
    const projectObj = { assignprojectid: selected };
    const positionObj = { title: position };
    const newMembers = { ...members, ...projectObj, ...positionObj };
    console.log(newMembers);
    const result = await axios.post("http://localhost:4000/update", newMembers);
    console.log(result.data.affectedRows);

    if (result.data.affectedRows) {
      router.push(`http://localhost:3000/04_detail/${members.memberid}`);
    } else {
      alert("失敗");
    }
  };
  // 役職のプルダウン
  const [position, setPosition] = useState(member.title);
  // プロジェクトのプルダウン
  const [selected, setSelected] = useState(member.assignprojectid);

  return (
    <div>
      <body>
        <TextField
          id="outlined-basic"
          label="氏名"
          variant="outlined"
          type="text"
          value={members.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <div>
          <TextField
            id="outlined-basic"
            label="住所"
            variant="outlined"
            type="text"
            value={members.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="連絡先"
            variant="outlined"
            type="text"
            value={members.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>
        <PullTitleEdit setPosition={setPosition} position={position} />
        <div>
          <Box>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                担当プロジェクト
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="担当プロジェクト"
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              >
                {project.map((obj) => (
                  <MenuItem value={obj.projectid}>{obj.project}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Button variant="contained" onClick={update}>
            更新
          </Button>
        </div>
      </body>
    </div>
  );
}
