import React from "react";
import { useParams } from "react-router-dom";

export default function IfComponent() {
  let { id } = useParams();
  let isTrue: boolean = true;
  //   if (isTrue) {
  //     return <p> Variable true</p>;
  //   } else {
  //     return <p> Variable false</p>;
  //   }
  return (
    <>
      {/* {isTrue ? <p>Variable true</p> : <p>Variable False</p>} */}
      {isTrue && <p>Variable true</p>}
      {id}
    </>
  );
}
