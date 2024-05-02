

// import React, { useState, useEffect } from 'react';

// export default function Dome() {
//   const url = "http://localhost:4000/form";
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setMembers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); 

//   return (
//     <div>
//       <h1>メンバー一覧</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>氏名</th>
//             <th>住所</th>
//             <th>連絡先</th>
//             <th>役職</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member, index) => (
//             <tr key={index}>
//               <td>{member.name}</td>
//               <td>{member.address}</td>
//               <td>{member.contact}</td>
//               <td>{member.position}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import axios from "axios";
export default function