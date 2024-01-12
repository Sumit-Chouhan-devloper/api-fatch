// import React, { useEffect, useState } from "react";

// const UseeffictAPI = () => {
//   const [users, setUsers] = useState([]);
//   const getUsers = async () => {
//     const Responce = await fatch("https://api.github.com/users");
//     setUsers(await Responce.json());
//   }
//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <div className="container bg-info vh-100">
//         <h2 className="text-center pt-3 fw-bold text-uppercase">
//           how to fatch api
//         </h2>
//         <div className="row">
//           {users.map((data) => {
//             <div className="col-4 px-3">
//               <h2>{data.login}</h2>
//               <h3>{data.type}</h3>
//               <p>{data.events_url}</p>
//             </div>
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UseeffictAPI;
