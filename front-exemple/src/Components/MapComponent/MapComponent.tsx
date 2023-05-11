import React from "react";
import Materiel from "../../Models/Materiel";

export default function MapComponent() {
  const listeDesPrenoms: string[] = ["lala", "lili", "lolo", "lulu"];
  const listeMateriels: Materiel[] = [
    {
      nom: "ordi",
      nombre: 15,
      utilisation: [true],
    },
    {
      nom: "telephone",
      nombre: 10,
      utilisation: [false],
    },
  ];

  const list = [
    { id: 1, nom: "ordi", nombre: 15 },
    { id: 2, nom: "telephone", nombre: 10 },
  ];
  const listeFiltre = listeMateriels.filter(
    (listeMateriels) => listeMateriels.nom === "ordi"
  );
  return (
    <>
      {listeDesPrenoms.map((listeDesPrenom) => (
        <p>{listeDesPrenom} !!!</p>
      ))}

      <p>Liste des objets</p>
      {listeMateriels.map((materiel) => (
        <ul>
          <li>Nom de l'objet {materiel.nom}</li>
          <li>Nombre d'objet : {materiel.nombre}</li>
        </ul>
      ))}

      <p>Liste des Ordis</p>
      {listeFiltre.map((filtre) => (
        <ul>
          <li>Nom : {filtre.nom}</li>
        </ul>
      ))}

      {list.map((list) => (
        <ul key={list.id}>
          <li>Nom : {list.nom}</li>
        </ul>
      ))}
    </>
  );
}
