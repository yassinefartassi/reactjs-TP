import React from "react";

const fetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:3001/students");
        if (!res.ok) {
          throw new Error("Erreur API");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error API");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Chargement des données...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Liste des Étudiants</h1>
      {data.map((d) => (
        <div key={d.id}>
          <p>ID : {d.id}</p>
          <p>Nom : {d.name}</p>
          <p>Âge : {d.age}</p>
        </div>
      ))}
    </div>
  );
};

export default fetchApi;
