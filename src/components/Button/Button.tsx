import styles from "./Button.module.scss";

type ButtonProprs = {
    onClick: () => void;
};

export const Button = ({ onClick }: ButtonProprs) => {
    return (
        <button className={styles.add_task} onClick={onClick}>
            <h4>Add task</h4>
        </button>
    );
};