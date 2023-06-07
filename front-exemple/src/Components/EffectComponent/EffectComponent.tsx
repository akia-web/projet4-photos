import React, { useEffect, useState } from "react";

export default function EffectComponent() {
  const [nombre, setNombre] = useState<number>(0);
  useEffect(() => {
    console.log(nombre);
    setNombre(nombre + 1);
  }, []);


  // pour chaque changement de la valeur nombre
  useEffect(() => {
    console.log(nombre);
    alert("le nombre a changé");
  }, [nombre]);


}

