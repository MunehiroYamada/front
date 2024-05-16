import axios from "axios";
import React from "react";
import SettingDetail from "../../../components/detail/button_detail";
import MemberDetail from "../../../components/detail/member_detail";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function MyComponent({ member, memberid }) {
  return (
    <Grid container justifyContent="center" padding={2} >
    <Box>
      <Grid container item  direction="column" alignItems= 'center' spacing={2}>
        <Grid item>
          <MemberDetail member={member} />
        </Grid>
        <Grid item>
          <SettingDetail memberid={memberid} />
        </Grid>
      </Grid>
    </Box>
    </Grid>
  );
}
export default MyComponent;

export async function getServerSideProps(context) {
  console.log(context)
  const memberid = context.query.id;
  const response = await axios.post("http://localhost:4000/detail", {
    memberid,
  });
  const member = response.data;
  return { props: { member, memberid } };
}
