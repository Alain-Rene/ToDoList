import { P } from "./todopriority.enum";

export interface Todo {
    task: string;
    completed: boolean;
    duration: number;
    priority: P;
}
