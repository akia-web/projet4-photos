import React from "react";
import "./style.css";

export default function FirstComponent() {
  return (
    <>
      <p>Coucou</p>
      <TestComponent></TestComponent>
    </>
  );
}

export function TestComponent() {
  return <p>deuxieme composant</p>;
}

export function Test2Component() {
    return <p>3eme composant</p>;
  }