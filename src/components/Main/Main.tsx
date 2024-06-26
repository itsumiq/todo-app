import { NowDate } from "../NowDate/NowDate";
import { Filter } from "../Filter/Filter";

import styles from "./Main.module.scss";

export const Main = () => {
    return (
        <main className={styles.main}>
            <NowDate />
            <Filter />
        </main>
    );
};