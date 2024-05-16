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
import Grid from "@mui/material/Grid";
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
    <Grid container justifyContent="center" padding={2} xs={12} md={12}>
      <Box
        component="section"
        sx={{
          whiteSpace: "pre-wrap",
          display: "flex",
          alignItems: "center",
          minHeight: "350px",
          minWidth: "320px",
          padding: 1,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "#b2ebf2",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Grid
          container
          direction="column"
          item
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <TextField
              sx={{ minWidth: 240 }}
              id="outlined-basic"
              label="氏名"
              variant="outlined"
              type="text"
              value={members.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
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
              value={members.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
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
              type="number"
              value={members.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              InputProps={{
                style: { background: "white" },
              }}
            />
          </Grid>
          <Grid item>
            <PullTitleEdit setPosition={setPosition} position={position} />
          </Grid>
          <Grid item>
            <Box>
              <FormControl sx={{ minWidth: 240 }}>
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
                  sx={{ background: "white" }}
                >
                  {project.map((obj) => (
                    <MenuItem value={obj.projectid}>{obj.project}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={update}>
              更新
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
