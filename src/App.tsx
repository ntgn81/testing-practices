import React from "react";
import { Sum } from "./components/Sum";

export default function App() {
  return (
    <div className="App">
      <h1>
        100 + 101 = <Sum a="100" b="101" />
      </h1>
    </div>
  );
}
