import React from "react";

export default function IfComponent() {
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
    </>
  );
}
