import { useEffect, useState } from "react";
import axios from "axios";

const getDetail = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/form");
        setMembers(res.data);
      } catch (error) {
        console.error("Fail", error.message);
      }
    };
    //   const res = await axios.get("http://localhost:4000/form");
    //   setMembers(res.data);
    //   console.log(res.data);
    // };
    getMembers();
  }, []);

  return (
    <div>
      {members.map(xmember=> {
        return (
          <div key={xmember.id}>
            <p>氏名：{xmember.member}</p>
            <p>住所：{xmember.location}</p>
            <p>連絡先：{xmember.phone}</p>
            <p>役職：{xmember.title}</p>
           
          </div>
        )
      })}
       <Button onClick={getDetail} buttonName={"詳細"} />
    </div>
  );
};

export default getDetail;
