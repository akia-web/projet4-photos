import React from "react";
import { people } from "../../Assets/Data";
import People from "./people";

export default function Exo(props: any) {
  const listPeople: People[] = people;
 
  const listFiltrer: People[] = listPeople.filter(
    (item) => item.profession === props.profession
  );

  return (
    <>
      <h1>EXO 1 </h1>
      {listFiltrer.map((list) => (
        <ul key={list.id}>
          <li>Nom : {list.name}</li>
          <li>profession : {list.profession}</li>
          <li>accomplissements : {list.accomplishment}</li>
        </ul>
      ))}
    </>
  );
}
