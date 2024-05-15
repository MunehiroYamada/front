import Button from '@mui/material/Button';
import { useRouter } from "next/router";
import React from "react";

export default function Setting() {
  const router = useRouter();
  const clickHandler1 = () => {
    router.push("/03_registration/registration");
  };

  return (
    <div>
      <Button variant="contained" type="button" onClick={clickHandler1}>
        新規登録
      </Button>
    </div>
  );
}
