import styles from "./Button.module.scss";

type buttonProps = {
    onClick?: () => void;
    title: string;
    parentStyle?: string;
};

export const Button = ({ onClick, title, parentStyle }: buttonProps) => {
    return (
        <button className={`${parentStyle} ${styles.button}`} onClick={onClick}>
            {title}
        </button>
    );
};
