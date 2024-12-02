import React, { useState } from "react";
import axios from "axios";

const AxiosPost = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false); // Initialisé à `false`

  const handleSubmit = async () => {
    setLoading(true); // Début du chargement
    try {
      const response = await axios.post("http://localhost:3001/students", {
        name: name,
        age: age,
      });
      console.log("Réponse du serveur :", response.data);
      alert("Données envoyées avec succès !");
      // Réinitialisez les champs après l'envoi
      setName("");
      setAge("");
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
      alert("Échec de l'envoi des données !");
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  return (
    <div>
      <h1>Formulaire d'envoi</h1>
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Envoi des données...</p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nom ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Âge ..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={handleSubmit}>Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default AxiosPost;
