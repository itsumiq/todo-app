import { checkLocalStorage } from "./checkLocaleStorage";

let todos: object[] = checkLocalStorage();

export const addLocalStorage = (key: string, value: string) => {
    todos.push({ [key]: value });

    localStorage.setItem("todos", JSON.stringify(todos));
};
