import axios from "axios";
import { Form } from "../../../../../components/form/Form";
import { Button } from "../../../../../components/button/Button";
import { useState } from "react";

const ENDPOINT_URL = "http://localhost:4000/form";

const Update = () => {
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

  const edit = async () => {
    console.log("data");
    console.log(data);
    try {
    
      const result = await axios.patch(ENDPOINT_URL,+data.id,data);
      console.log("result: ");
      console.log(result);
      return result.data;
    } catch (error) {
      console.error("update failed:", error.message);
    //   const result = await axios.post(ENDPOINT_URL, data);
    //   console.log("result: ");
    //   console.log(result);
    //   return result.data;
    // } catch (error) {
    //   console.error("update failed:", error.message);
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
      <Button onClick={edit} buttonName={"完了"} />
    </div>
  );
};

export default Update;