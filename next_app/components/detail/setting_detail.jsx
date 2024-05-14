import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import React from "react";

export default function SettingRegistration({ memberid }) {
  const router = useRouter();
  const clickHandler1 = () => {
    router.push(`http://localhost:3000/02_list/edit/${memberid}`);
  };

  return (
    <div>
      <Button variant="contained" onClick={clickHandler1}>
        編集
      </Button>
    </div>
  );
}
