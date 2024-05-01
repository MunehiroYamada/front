import axios from "axios";

const MYSQL_SERVER_URL='http://localhost:4000/form';

export default async function handler(req,res){
  if(req.method ==="GET"){
    const result =await axios.get(MYSQL_SERVER_URL).then(res=>res.data);
    return res.status(200).json(result);
  }
 return res.status(500).json({
  error:{
    status:500,
    code:"BAD",
    message:"不正なリクエスト"
  }
 })
}