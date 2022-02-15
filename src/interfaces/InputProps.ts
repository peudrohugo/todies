import React from "react";

export interface InputProps {
  tody: string;
  setTody: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}
