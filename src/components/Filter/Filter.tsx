import styles from "./Filter.module.scss";

export const Filter = () => {
    return (
        <div className={styles.filter}>
            <button className={styles.today}>
                <div className={styles.circle}></div>
                <h3>Today</h3>
            </button>
            <button className={styles.week}>
                <div className={styles.circle}></div>
                <h3>This week</h3>
            </button>
        </div>
    );
};