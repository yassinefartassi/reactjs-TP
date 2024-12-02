import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchApiAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:3001/students");
        setData(res.data);
      } catch (error) {
        console.error("Error API", error);
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
          <p>Id : {d.id}</p>
          <p>Nom : {d.name}</p>
          <p>Âge : {d.age}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchApiAxios;
