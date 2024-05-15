import axios from "axios";
import React from "react";
import Setting from "../../../components/list/setting_list";
import MemberList from "../../../components/list/member_list";
import ModalStart from "../../../components/list/modal/ModalStart";
import { useState } from "react";
import Grid from "@mui/material/Grid";

function MyComponent({ member = [] }) {
  const [memberState, setMemberState] = useState(member);
  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid container spacing={2} item>
          <Grid item>
            <Setting />
          </Grid>

          <Grid item>
            <ModalStart setMemberState={setMemberState} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <MemberList member={memberState} />
        </Grid>
      </Grid>
    </div>
  );
}
export default MyComponent;

export async function getServerSideProps() {
  const response = await axios.post("http://localhost:4000/all");
  const member = response.data;
  return { props: { member } };
}

// http://localhost:3000/02_list/list
