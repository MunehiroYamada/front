import axios from "axios";
import { Form } from "../../../../components/form/Form";
import { Button } from "../../../../components/button/Button";
import { useState } from "react";

const ENDPOINT_URL = "http://localhost:4000/form";

const registration = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");

  const data = {
    name: name,
    location: location,
    phone: phone,
    title: title,
  };

  const register = async () => {
    try {
      const result = await axios.post(ENDPOINT_URL, data);
      return result.data;
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div>
      <Form
        setName={setName}
        setLocation={setLocation}
        setPhone={setPhone}
        setTitle={setTitle}
      />
      <Button onClick={register} buttonName={"登録"} />
    </div>
  );
};

export default registration;

// データベースのxmemberテーブルの名前をmemberに変更しました。
// データベースのmemberテーブル内のカラムmemberをnameに変更しました。