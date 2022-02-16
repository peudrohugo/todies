import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ListProps } from "../interfaces/ListProps";
import "../styles/TodiesList.component.css";
import TodyCard from "./TodyCard";

const TodiesList: React.FC<ListProps> = ({ todies, setTodies, completedTodies, setCompletedTodies }) => {
  return (
    <div className="container">
      <Droppable droppableId="activeTodies">
        {(provided) => (
          <div
            className="todies"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todies__heading">Active Todies</span>
            {todies.map((tody, index) => (
              <TodyCard
                index={index}
                tody={tody}
                key={tody.id}
                todies={todies}
                setTodies={setTodies}
              />
            ))}
            { provided.placeholder }
          </div>
        )}
      </Droppable>
      <Droppable droppableId="doneTodies">
        {(provided) => (
          <div
            className="todies done"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todies__heading">Completed Todies</span>
            {completedTodies.map((tody, index) => (
              <TodyCard
                index={index}
                tody={tody}
                key={tody.id}
                todies={completedTodies}
                setTodies={setCompletedTodies}
              />
            ))}
            { provided.placeholder }
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodiesList;
