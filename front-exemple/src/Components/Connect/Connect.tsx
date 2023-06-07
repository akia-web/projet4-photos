import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Users from "../../Models/Users";
// import { useForm } from "react-hook-form";
export default function Connect() {
  const [user, setUser] = useState<Users>();
  // const { register, handleSubmit } = useForm();

  // function onSubmit(data: any){
  //   console.log(data); }

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />
      {/* </form> */}
    </>
  );
}
