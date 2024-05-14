import axios from "axios";
import React from "react";

import MemberEdit from "../../../components/edit/member_edit";

function MyComponent({ member, project }) {
  return <MemberEdit member={member} project={project} />;
}
export default MyComponent;

export async function getServerSideProps(context) {
  const memberid = context.query.id;
  const response = await axios.post("http://localhost:4000/detail", {
    memberid,
  });
  const member = response.data;

  const results = await axios.post("http://localhost:4000/pullPro");
  const project = results.data;

  return { props: { member, project } };
}
