import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodiesList from "./components/TodiesList";
import { Tody } from "./interfaces/Tody";

const App: React.FC = () => {
  const [tody, setTody] = useState<string>("");
  const [todies, setTodies] = useState<Tody[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (tody) {
      setTodies([...todies, { id: Date.now(), tody, isDone: false }]);
    }
    setTody("");
  };

  return (
    <div className="App">
      <span className="heading">Todies</span>
      <InputField tody={tody} setTody={setTody} handleAdd={handleAdd} />
      <TodiesList todies={todies} setTodies={setTodies} />
    </div>
  );
};

export default App;
