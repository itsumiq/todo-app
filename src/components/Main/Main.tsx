import { NowDate } from "../NowDate/NowDate";
import { Filter } from "../Filter/Filter";
import { TaskList } from "../TaskList/TaskList";

import styles from "./Main.module.scss";

export const Main = () => {
    return (
        <main className={styles.main}>
            <NowDate />
            <TaskList />
            <Filter />
        </main>
    );
};