import axios from "axios";
import { Form } from "../../../../components/form/Form";
import { Button } from "../../../../components/button/Button";
import { useState } from "react";

const ENDPOINT_URL = "http://localhost:4000/form";

const registration = () => {
  const [member, setMember] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");

  const data = {
    member: member,
    location: location,
    phone: phone,
    title: title,
  };
  console.log(data);
  // const register = async () => {
  //   console.log("a");
  //   const result = await axios.post(ENDPOINT_URL, data);
  //   return result.data;
  // };

  const register = async () => {
    console.log("data");
    console.log(data);
    try {
      // const result = await axios.post("http://localhost:4000/form", data);
      const result = await axios.post(ENDPOINT_URL, data);
      console.log("result: ");
      console.log(result);
      return result.data;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div>
      <Form
        setMember={setMember}
        setLocation={setLocation}
        setPhone={setPhone}
        setTitle={setTitle}
      />
      <Button onClick={register} buttonName={"登録"} />
    </div>
  );
};

export default registration;
