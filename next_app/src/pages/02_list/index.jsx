// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Page({ data }) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const ENDPOINT = "http://localhost:4000/form";
//       const result = await axios.get(ENDPOINT).then((res) => res.data);
//       setData(result);
//     };
//     getData();
//   }, []);

//   if (!data) {
//     return <div>データがありません。</div>;
//   }
//   return <h3>aa</h3>;
// }
