import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function Setting({ query }) {
  const router = useRouter();
  const clickHandler1 = () => {
    router.push("/02_list/registration");
  };
  const clickHandler2 = () => {
    router.push("/");
  };
  return (
    <div>
      <button onClick={clickHandler1}>新規登録</button>
      <button onClick={clickHandler2}>検索</button>
    </div>
  );
}
