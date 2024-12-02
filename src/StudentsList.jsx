import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function fetchStudents() {
  return axios.get("http://localhost:3001/students").then((res) => res.data);
}

const StudentsList = () => {
  const {
    data: students,
    error,
    isLoading,
    isError,
  } = useQuery("students", fetchStudents);

  if (isLoading) {
    return <p>Chargement de la page ...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des données: {error.message}</p>;
  }

  return (
    <div>
      <h1>Liste des Étudiants</h1>
      {students.map((student) => (
        <div key={student.id}>
          <p>ID : {student.id}</p>
          <p>Nom : {student.name}</p>
          <p>Âge : {student.age}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentsList;
