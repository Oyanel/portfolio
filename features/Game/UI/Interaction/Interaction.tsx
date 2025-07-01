import { DialogueEntry, DialoguesAtlas } from "@/features/Game/UI/Interaction/interaction.type";
import { useCallback, useState } from "react";
import { Button } from "@/components/Buttons/Button/Button";
import { eventManager } from "@/features/Game/EventManager";
import style from "./interaction.module.scss";

type Props = {
    dialogues: DialoguesAtlas;
    objectName: string;
    dialogueKey: string;
    options?: {
        optionKey: string;
        nextEventKey: string;
    }[];
};

export const Interaction = ({ dialogues, dialogueKey }: Props) => {
    const [dialogueEntry, setDialogueEntry] = useState<DialogueEntry>(dialogues[dialogueKey]);
    const { dialogue, options } = dialogueEntry;
    const [dialogCounter, setDialogCounter] = useState(0);

    const onSelectOption = useCallback(
        (nextEventKey: string) => {
            const [dialogueType, nextDialogueKey] = nextEventKey.split(":");

            if (dialogueType === "DIALOGUE_END") {
                eventManager.emit({ type: "DIALOGUE_END" });
                return;
            }

            setDialogueEntry(dialogues[nextDialogueKey]);
            setDialogCounter(0);
        },
        [dialogues],
    );

    const onNext = useCallback(() => {
        if (dialogCounter < dialogue.length - 1) {
            setDialogCounter((prevState) => prevState + 1);
            return;
        }

        eventManager.emit({ type: "DIALOGUE_END" });
    }, [dialogCounter, dialogue.length]);

    return (
        <div className={style.interactionRoot}>
            <div className={style.dialogBox}>
                <p className={style.text}>{dialogue[dialogCounter].text}</p>
                <ul className={style.options}>
                    {options?.map((option) => (
                        <li key={option.text}>
                            <Button variant="dialogue" onClick={() => onSelectOption(option.nextEventKey)}>
                                {option.text}
                            </Button>
                        </li>
                    ))}
                </ul>
                {!options && dialogue[dialogCounter] && (
                    <Button className={style.button} variant="dialogue" onClick={onNext}>
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};
