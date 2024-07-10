import styles from "./Input.module.scss";

type InputProps = {
    parentStyle: string;
    text: string;
    onChange: (value: string) => void;
};

export const Input = ({ parentStyle, text, onChange }: InputProps) => {
    return (
        <textarea
            name=""
            id=""
            className={`${parentStyle} ${styles.input_text}`}
            value={text}
            onChange={(e) => onChange(e.target.value)}
        ></textarea>
    );
};
