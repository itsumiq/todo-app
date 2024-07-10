import { useId } from "react";

import styles from "./RadioButton.module.scss";

type radioButtonProps = {
    title: string;
    parentStyles: string;
    name: string;
    onChange: (value: string) => void;
    currentValue: string;
};

export const RadioButton = ({
    title,
    parentStyles,
    name,
    onChange,
    currentValue,
}: radioButtonProps) => {
    const id = useId();
    return (
        <div className={styles.time_choice}>
            <input
                type="radio"
                className={styles.checkbox}
                name={name}
                id={id}
                value={title}
                onChange={(e) => onChange(e.target.value)}
                checked={currentValue == title ? true : false}
            />
            <label htmlFor={id} className={parentStyles}>
                {title}
            </label>
        </div>
    );
};
