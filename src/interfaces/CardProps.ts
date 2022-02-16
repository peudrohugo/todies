import { Tody } from "./Tody";

export interface CardProps {
    index: number;
    tody: Tody;
    todies: Tody[];
    setTodies: React.Dispatch<React.SetStateAction<Tody[]>>;
}