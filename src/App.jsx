import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import envConfig from "./envConfig";

function App() {
  console.log(envConfig.projectUrl);

  return (
    <>
      <h1>Blog website with appwrite</h1>
    </>
  );
}

export default App;
