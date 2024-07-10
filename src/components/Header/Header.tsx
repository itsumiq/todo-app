import styles from "./Header.module.scss";
import github from "../../icons/github.svg";

export const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <h2>ToDo</h2>
                <img src={github} alt="" />
            </div>
        </header>
    );
};
