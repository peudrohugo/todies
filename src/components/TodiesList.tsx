import React from "react";
import { ListProps } from "../interfaces/ListProps";
import "../styles/TodiesList.component.css";
import TodyCard from "./TodyCard";

const TodiesList: React.FC<ListProps> = ({ todies, setTodies }) => {
  return (
    <div className="todies">
      {todies.map((tody) => (
        <TodyCard
          tody={tody}
          key={tody.id}
          todies={todies}
          setTodies={setTodies}
        />
      ))}
    </div>
  );
};

export default TodiesList;
