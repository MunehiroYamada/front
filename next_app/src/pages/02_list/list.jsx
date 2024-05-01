import { useRouter } from "next/router";
import{useEffect,useState} from "react";
import axios from "axios";

// const List=()=>{
//   const [members,setMembers]=useState()
//   useEffect(()=>{
//     const getMember=async()=>{
//       const res=await axios.get('http://localhost:4000/form')
//       setMembers(res.data);
//     }
//     getMember();
//   },[])
//   return(
//     <div>
//       {members.map((xmember)=>(
//           <div key={xmember.id}>
//             <h3>氏名：{xmember.member}</h3>
//             <p>住所：{xmember.location}</p>
//             <p>連絡先：{xmember.phone}</p>
//             <p>役職：{xmember.title}</p>
//           </div>
//       ))}
//     </div>
//   );
// };

// List();


export default function Page({xMembers}){
  return(
    <>
    </>
  )
}

export async function getStaticProps(){
  const ENDPOINT='http://localhost:4000/form';
  const result =await axios.get(ENDPOINT).then(res=>res.data);
  return{props:{xMembers:result}}
}



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
    </div>)
}


