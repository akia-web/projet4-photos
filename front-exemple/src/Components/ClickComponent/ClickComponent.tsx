import React from "react";

export default function ClickComponent({ compteur }: any) {
  function handleClick() {
    alert("message" + compteur);
  }
  return (
    <>
      <button onClick={handleClick}>Mon Button</button>
      {/* <button onClick={()=>{alert('message')}}>Mon Button</button> */}

      {/**Stopper la propaggation de l'evenement */}
      <div
        onClick={() => {
          alert("div");
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("bouton1");
          }}
        >
          Mon Button
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("bouton2");
          }}
        >
          Mon Button
        </button>
      </div>
    </>
  );
}
