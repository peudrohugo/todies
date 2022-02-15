import { Tody } from "./Tody";

export interface ListProps {
    todies: Tody[];
    setTodies: React.Dispatch<React.SetStateAction<Tody[]>>;
}