import { useState } from "react";

import { Button } from "../Button/Button";
import { PopUp } from "../PopUp/PopUp";

import styles from "./TaskList.module.scss";

export const TaskList = () => {
    const [taskList, useTaskList] = useState([]);
    const [openPopUp, useOpenPopUp] = useState(false);

    const handleClick = () => {
        useOpenPopUp(!openPopUp);
    };

    if (taskList.length === 0) {
        return (
            <div className={styles.no_tasks}>
                <h3 className={styles.title}>You don't have tasks</h3>
                <h6 className={styles.subtitle}>Сlick the button to add a task</h6>
                <Button onClick={handleClick} title="Add task" parentStyle={styles.add_task} />
                {openPopUp && <PopUp onClick={handleClick} />}
            </div>
        );
    }
};
