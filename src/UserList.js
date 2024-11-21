import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Appeler l'API pour récupérer les utilisateurs
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Enregistrer les données dans l'état
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>Nom:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

