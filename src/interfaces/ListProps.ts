import { Tody } from "./Tody";

export interface ListProps {
    todies: Tody[];
    setTodies: React.Dispatch<React.SetStateAction<Tody[]>>;
    completedTodies: Tody[];
    setCompletedTodies: React.Dispatch<React.SetStateAction<Tody[]>>;
}