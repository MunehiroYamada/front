import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function MemberDetail({ member }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>社員番号 : {member.memberid}</ListItem>
      <ListItem>氏名 : {member.name}</ListItem>
      <ListItem>住所 : {member.location}</ListItem>
      <ListItem>連絡先 : {member.phone}</ListItem>
      <ListItem>役職 : {member.title}</ListItem>
      <ListItem>担当プロジェクト : {member.project}</ListItem>
    </List>
  );
}
