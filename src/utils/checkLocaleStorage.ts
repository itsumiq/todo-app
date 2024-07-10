export const checkLocalStorage = (): object[] | [] => {
    const value = localStorage.getItem("todos");

    if (typeof value === "string") {
        return JSON.parse(value);
    }

    return [];
};
