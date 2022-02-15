import { Tody } from "./Tody";

export interface CardProps {
    tody: Tody;
    todies: Tody[];
    setTodies: React.Dispatch<React.SetStateAction<Tody[]>>;
}