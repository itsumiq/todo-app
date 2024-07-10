import { useState } from "react";

import { addLocalStorage } from "../../utils/addLocaleStorage";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { RadioButton } from "../RadioButton/RadioButton";
import { CrossButton } from "../CrossButton/CrossButton";

import styles from "./PopUp.module.scss";

type popUpProps = {
    onClick: () => void;
};

export const PopUp = ({ onClick }: popUpProps) => {
    const [inputText, useInputText] = useState("");
    const [currentButton, setCurrentButton] = useState("Today");

    const changeInputText = (newInputText: string) => {
        useInputText(newInputText);
    };

    const changeCurrentButton = (newCurrentButton: string) => {
        setCurrentButton(newCurrentButton);
    };

    return (
        <div className={styles.pop_up}>
            <CrossButton parentStyles={styles.cross} onClick={onClick} />
            <div className={styles.container}>
                <div className={styles.task}>
                    <h2 className={styles.title}>What do you want to do?</h2>
                    <Input
                        parentStyle={styles.input_text}
                        text={inputText}
                        onChange={changeInputText}
                    />
                </div>
                <div className={styles.time_choice}>
                    <h2 className={styles.title}>When you plan to do it?</h2>
                    <div className={styles.checkbox}>
                        <RadioButton
                            title="Today"
                            name="timeChoice"
                            parentStyles={styles.sign}
                            onChange={changeCurrentButton}
                            currentValue={currentButton}
                        />
                        <RadioButton
                            title="This week"
                            name="timeChoice"
                            parentStyles={styles.sign}
                            onChange={changeCurrentButton}
                            currentValue={currentButton}
                        />
                    </div>
                </div>
                <div className={styles.action}>
                    <Button
                        parentStyle={styles.save}
                        title="Save"
                        onClick={() => {
                            addLocalStorage(currentButton, inputText);
                            onClick();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
