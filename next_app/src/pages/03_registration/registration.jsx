import Button from "@mui/material/Button";
import * as React from "react";
import axios from "axios";
import { Form } from "../../../components/registration/Form";
import { Button1 } from "../../../components/registration/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import PullTitle from "../../../components/registration/PullTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

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
      <Grid container justifyContent="center" padding={2} xs={12} md={12}>
        <Grid item>
          <Box
            component="section"
            sx={{
              whiteSpace: "pre-wrap",
              display: "flex",
              alignItems: "center",
              minHeight: "350px",
              minWidth: "320px",
              padding: 1,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              bgcolor: "#b2ebf2",
              color: "text.secondary",
              "& svg": {
                m: 1,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Grid
              container
              direction="column"
              item
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Form
                  setName={setName}
                  setLocation={setLocation}
                  setPhone={setPhone}
                />
              </Grid>
              <Grid item>
                <PullTitle setSelected={setSelected} />
              </Grid>
              <Grid item>
                <Button1 onClick={() => changePage(1)} buttonName={"登録"} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
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
      changePage(2);
      return result.data;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      padding={2}
    >
      <Box
        sx={{
          whiteSpace: "pre-wrap",
          display: "flex",
          alignItems: "center",
          minHeight: "200px",
          padding: 1,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "#b2ebf2",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <div>
          <Grid container></Grid>
          <Grid item>下記の内容で問題なければ完了ボタンを押してください。</Grid>
          <Grid item>
            氏名 : {name}
            <Divider orientation="vertical" flexItem />
            <Divider />
            住所 : {location}
            <Divider orientation="vertical" flexItem />
            <Divider />
            連絡先 : {phone}
            <Divider orientation="vertical" flexItem />
            <Divider />
            役職 : {selected}
          </Grid>
          <Grid container item justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" onClick={back}>
                戻る
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={confirm}>
                完了
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Grid>
  );
};

// 完了画面
const Page2 = () => {
  const router = useRouter();
  const goToList = () => {
    router.push("/02_list/list");
  };
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      padding={2}
    >
      <Grid item>
        <Box
          sx={{
            whiteSpace: "pre-wrap",
            display: "flex",
            alignItems: "center",
            minHeight: "200px",
            minWidth: "350px",
            padding: 1,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            bgcolor: "#b2ebf2",
            color: "text.secondary",
            "& svg": {
              m: 1,
            },
            "& hr": {
              mx: 0.5,
            },
          }}
        >
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <h5>登録が完了しました。</h5>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => goToList()}>
                一覧画面に戻る
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default registration;
