import React from "react";
import Materiel from "../../Models/Materiel";
import ComponentWithProps from "../ComponentWithProps/ComponentWithProps";

export default function SecondComponent() {
  const text: string = "";
  const compteur: number = 0;
  const table: number[] = [1, 15, 12];
  const monObjetJs = {
    nom: "Clavier",
    nombre: 1,
    utilisation: {
      ordinateur: true,
      phone: false,
      laptop: true,
    },
  };
  const monObjetTs: Materiel = {
    nom: "gnia gnia gnia",
    nombre: 15,
  };
  let variable: boolean = false;
  return (
    <>
      <p>Nombre de clic : {compteur}</p>
      Nombre d'objet : <ComponentWithProps compteur={1} nom = {monObjetTs.nom}></ComponentWithProps>
    </>
  );
}
