// import { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const res = await fetch("http://localhost:3001/students");
//         if (!res.ok) {
//           throw new Error("erreur api");
//         }
//         const data = await res.json();
//         setData(data);
//       } catch (error) {
//         console.error("Error Api");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   if (loading) {
//     return <p>chargement des donnes</p>;
//   }
//   return (
//     <div>
//       <h1>List des Etudiants</h1>
//       {data.map((d) => (
//         <div key={d.id}>
//           <p>ID : {d.id}</p>
//           <p>Nom : {d.name}</p>
//           <p>Âge : {d.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import FetchApiAxios from "./FetchApiAxios";
import AxiosPost from "./AxiosPost";
import StudentsList from "./StudentsList";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <AxiosPost />
      <QueryClientProvider client={queryClient}>
        <StudentsList />
      </QueryClientProvider>
      {/* <FetchApiAxios /> */}
    </>
  );
}

export default App;
