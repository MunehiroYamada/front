import axios from "axios";
import React from "react";
import SettingDetail from "../../../components/detail/setting_detail";
import MemberDetail from "../../../components/detail/member_detail";

function MyComponent({ member, memberid }) {
  return (
    <>
      <MemberDetail member={member} />
      <SettingDetail memberid={memberid} />
    </>
  );
}
export default MyComponent;

export async function getServerSideProps(context) {
  const memberid = context.query.id;
  const response = await axios.post("http://localhost:4000/detail", {
    memberid,
  });
  const member = response.data;
  return { props: { member, memberid } };
}
