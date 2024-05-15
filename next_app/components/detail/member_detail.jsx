import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function MemberDetail({ member }) {
  return (
    <Grid item justifyContent="center">
      <Box
        sx={{
          // width: "500px",
          whiteSpace: "pre-wrap",
          maxWidth: "700px",
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
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
        <Grid container direction="column" j>
          社員番号 : {member.memberid}
          <Divider orientation="vertical" flexItem />
          <Divider />
          氏名 : {member.name}
          <Divider orientation="vertical" flexItem />
          <Divider />
          住所 : {member.location}
          <Divider orientation="vertical" flexItem />
          <Divider />
          連絡先 : {member.phone}
          <Divider orientation="vertical" flexItem />
          <Divider />
          役職 : {member.title}
          <Divider orientation="vertical" flexItem />
          <Divider />
          担当プロジェクト : {member.project}
        </Grid>
      </Box>
    </Grid>
  );
}
