import axios from "axios";
import React from "react";
import Setting from "../../../components/list/setting_list";
import MemberList from "../../../components/list/member_list";
import ModalStart from "../../../components/list/modal/ModalStart";
import { useState } from "react";

function MyComponent({ member = [] }) {
  const [memberState, setMemberState] = useState(member);
  return (
    <div>
      <Setting />
      <ModalStart setMemberState={setMemberState} />
      <div>
        <MemberList member={memberState} />
      </div>
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