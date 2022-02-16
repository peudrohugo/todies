import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodiesList from "./components/TodiesList";
import { Tody } from "./interfaces/Tody";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [tody, setTody] = useState<string>("");
  const [todies, setTodies] = useState<Tody[]>([]);
  const [completedTodies, setCompletedTodies] = useState<Tody[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (tody) {
      setTodies([...todies, { id: Date.now(), tody, isDone: false }]);
    }
    setTody("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todies,
      completed = completedTodies;

    if (source.droppableId === "activeTodies") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "activeTodies") {
      add.isDone = false;
      active.splice(destination.index, 0, add);
    } else {
      add.isDone = true;
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodies(completed);
    setTodies(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Todies</span>
        <InputField tody={tody} setTody={setTody} handleAdd={handleAdd} />
        <TodiesList
          todies={todies}
          setTodies={setTodies}
          completedTodies={completedTodies}
          setCompletedTodies={setCompletedTodies}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
