import axios from "axios";
import { Form } from "../../../../components/form/Form";
import { Button } from "../../../../components/button/Button";
import { useState } from "react";
import PullTitle from "../../../../components/pulldown/PullTitle";

const ENDPOINT_URL = "http://localhost:4000/form";


// const registration = () => {
  // const [name, setName] = useState("");
  // const [location, setLocation] = useState("");
  // const [phone, setPhone] = useState("");
  // const [selected, setSelected] = useState("");

  // const data = {
  //   name: name,
  //   location: location,
  //   phone: phone,
  //   title: selected,
  // };


  const register = async () => {
    try {
      const result = await axios.post(ENDPOINT_URL, data);
      console.log(result.data);

      return result.data;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };


  return (
    <div>
      <Form setName={setName} setLocation={setLocation} setPhone={setPhone} />
      <p>役職</p>
      <PullTitle setSelected={setSelected} />※
      <div>
        <Button onClick={register} buttonName={"登録"} />
      </div>
    </div>
  );
};

export default registration;