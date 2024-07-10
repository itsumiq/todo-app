import styles from "./CrossButton.module.scss";

type crossButtonProps = {
    parentStyles: string;
    onClick: () => void;
};

export const CrossButton = ({ parentStyles, onClick }: crossButtonProps) => {
    return (
        <button className={`${styles.cross} ${parentStyles}`} onClick={onClick}>
            <div className={styles.left_cross}></div>
            <div className={styles.right_cross}></div>
        </button>
    );
};
