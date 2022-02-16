import React, { useEffect, useRef, useState } from "react";
import { CardProps } from "../interfaces/CardProps";
import "../styles/TodyCard.component.css";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

const TodyCard: React.FC<CardProps> = ({ index, tody, todies, setTodies }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTody, setEditTody] = useState<string>(tody.tody);

  const handleDone = (id: number) => {
    setTodies(
      todies.map((tody) =>
        tody.id === id ? { ...tody, isDone: !tody.isDone } : tody
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodies(todies.filter((tody) => tody.id !== id));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodies(
      todies.map((tody) =>
        tody.id === id ? { ...tody, tody: editTody } : tody
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={tody.id.toString()} index={index}>
      {(provided) => (
        <form
          ref={provided.innerRef}
          className="todies__single"
          onSubmit={(event) => handleEdit(event, tody.id)}
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
        >
          {edit ? (
            <>
              <input
                ref={inputRef}
                value={editTody}
                onChange={(event) => setEditTody(event.target.value)}
                type="text"
                className="todies__single--text"
              />
              <span
                className="icon"
                onClick={() => {
                  setEdit(false);
                }}
              >
                <AiOutlineClose />
              </span>
            </>
          ) : tody.isDone ? (
            <>
              <s className="todies__single--text">{tody.tody}</s>
              <span className="icon" onClick={() => handleDelete(tody.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(tody.id)}>
                <AiOutlineCheck />
              </span>
            </>
          ) : (
            <>
              <span className="todies__single--text">{tody.tody}</span>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !tody.isDone) {
                    setEdit(true);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(tody.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(tody.id)}>
                <AiOutlineCheck />
              </span>
            </>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default TodyCard;
