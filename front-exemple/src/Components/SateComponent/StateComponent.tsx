import React, { useState } from "react";
import Materiel from "../../Models/Materiel";

export default function StateComponent() {
  //   let cpt: number = 0;
  const [cpt, setCpt] = useState<number>(0);
  const [nom, setNom] = useState<string>("nom");
  const [materiel, setMateriel] = useState<Materiel>({
    nom: "souris",
    nombre: 1,
  });

  function modifMaterial(value: string) {
    setMateriel({
      ...materiel,
      nom: value,
    });
  }

  return (
    <>
      <button
        onClick={() => {
          setCpt(cpt + 1);
        }}
      >
        Nombre de click: {cpt}
      </button>

      <ul>
        <li>{materiel.nom}</li>
        <li>{materiel.nombre}</li>
      </ul>

      {/* <button onClick={modifMaterial}>+ nombre</button> */}

      <input
        type="text"
        onChange={(event) => modifMaterial(event.target.value)}
      />
    </>
  );
}
