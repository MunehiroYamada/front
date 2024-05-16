import axios from "axios";
import React from "react";
import Setting from "../../../components/list/button_list";
import MemberList from "../../../components/list/member_list";
import ModalStart from "../../../components/list/modal/ModalStart";
import { useState } from "react";
import Grid from "@mui/material/Grid";

function list({ member = [] }) {
  const [memberState, setMemberState] = useState(member);
  return (
    <div>
      <Grid container justifyContent="center" direction="column" alignItems= 'center'  spacing={2} padding={2}>
        <Grid container justifyContent="center" alignItems= 'center' spacing={2} item>
          <Grid item>
            <Setting />
          </Grid>
          <Grid item>
            <ModalStart setMemberState={setMemberState} />
          </Grid>
        </Grid>
        <Grid item>
          <MemberList member={memberState} />
        </Grid>
      </Grid>
    </div>
  );
}
export default list;

export async function getServerSideProps() {
  const response = await axios.post("http://localhost:4000/all");
  const member = response.data;
  return { props: { member } };
}

// http://localhost:3000/02_list/list
