import Button from "@mui/material/Button";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import { Form } from "../../../components/registration/Form";
import { Button1 } from "../../../components/registration/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import PullTitle from "../../../components/registration/PullTitle";

const ENDPOINT_URL1 = "http://localhost:4000/form";

//前提
const registration = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState("");
  const changePage = (pages) => {
    setPage(pages);
  };
  console.log(page);

  if (page === 0) {
    return (
      <div>
        <Page0
          setName={setName}
          setLocation={setLocation}
          setPhone={setPhone}
          setSelected={setSelected}
          changePage={changePage}
          setPage={setPage}
        />
      </div>
    );
  } else if (page === 1) {
    return (
      <div>
        <Page1
          changePage={changePage}
          name={name}
          location={location}
          phone={phone}
          selected={selected}
          setPage={setPage}
        />
      </div>
    );
  } else if (page === 2) {
    return <Page2 changePage={changePage} setPage={setPage} />;
  } else {
    console.log("errer");
  }
};

// 入力画面
const Page0 = ({ setName, setLocation, setPhone, setSelected, changePage }) => {
  return (
    <div>
      <Form setName={setName} setLocation={setLocation} setPhone={setPhone} />
      <PullTitle setSelected={setSelected} />
      <div>
        <Button1 onClick={() => changePage(1)} buttonName={"登録"} />
      </div>
    </div>
  );
};

// 確認画面
const Page1 = ({ name, location, phone, selected, changePage }) => {
  const back = () => {
    changePage(0);
  };
  const confirm = async () => {
    const data = {
      name: name,
      location: location,
      phone: phone,
      title: selected,
    };
    try {
      const result = await axios.post(ENDPOINT_URL1, data);
      console.log("aaa");
      changePage(2);
      console.log("aaaaa");
      return result.data;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <div>
      <h5>下記の内容で問題なければ完了ボタンを押してください。</h5>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>氏名 : {name}</ListItem>
        <ListItem>住所 : {location}</ListItem>
        <ListItem>連絡先 : {phone}</ListItem>
        <ListItem>役職 : {selected}</ListItem>
      </List>
      <Button variant="contained" onClick={back}>
        戻る
      </Button>
      <Button variant="contained" onClick={confirm}>
        完了
      </Button>
    </div>
  );
};
// 完了画面
const Page2 = () => {
  const router = useRouter();
  const goToList = () => {
    router.push("/02_list/list");
  };
  return (
    <div>
      <h5>登録が完了しました。</h5>
      <Button variant="contained" onClick={() => goToList()}>
        一覧画面に戻る
      </Button>
    </div>
  );
};
export default registration;

// http://localhost:3000/03_registration/registration