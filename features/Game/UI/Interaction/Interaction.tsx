import { DialogueEntry, DialoguesAtlas } from "@/features/Game/UI/Interaction/interaction.type";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Buttons/Button/Button";
import { eventManager } from "@/features/Game/EventManager";
import style from "./interaction.module.scss";
import { DialogueBox } from "@/features/Game/UI/components/dialogBox/dialogueBox";
import { TypewriterText } from "@/components/TypewritterText/TypewriterText";
import Image, { StaticImageData } from "next/image";

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
    const [displayedImage, setDisplayedImage] = useState<StaticImageData | string>();
    const { dialogue, options } = dialogueEntry;
    const [dialogCounter, setDialogCounter] = useState(0);

    const onSelectOption = useCallback(
        (nextEventKey: string) => {
            const [dialogueType, nextDialogueKey] = nextEventKey.split(":");

            if (dialogueType === "DIALOGUE_END") {
                eventManager.emit({ type: "EXIT" });
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

        eventManager.emit({ type: "EXIT" });
    }, [dialogCounter, dialogue.length]);

    // Displays the last displayed image if no images
    useEffect(() => {
        if (dialogue[dialogCounter].image) {
            setDisplayedImage(dialogue[dialogCounter].image);
        }
    }, [dialogCounter, dialogue]);

    return (
        <div className={style.interactionRoot}>
            <div className={style.dialogueContainer}>
                <div className={style.imageContainer}>
                    {displayedImage && (
                        <Image
                            sizes="50vw"
                            className={style.image}
                            src={displayedImage}
                            alt=""
                            fill
                            objectFit="contain"
                        />
                    )}
                </div>
                <DialogueBox className={style.dialogueBox}>
                    <TypewriterText className={style.text} text={dialogue[dialogCounter].text} />
                    <ul className={style.options}>
                        {!dialogue[dialogCounter + 1] &&
                            options?.map((option, index) => (
                                <li key={option.text}>
                                    <Button
                                        variant="dialogue"
                                        onClick={() => onSelectOption(option.nextEventKey)}
                                        autoFocus={index === 0}
                                    >
                                        {option.text}
                                    </Button>
                                </li>
                            ))}
                        {!options ||
                            (dialogue[dialogCounter + 1] && (
                                <li>
                                    <Button className={style.button} variant="dialogue" onClick={onNext} autoFocus>
                                        {dialogue[dialogCounter + 1] ? "Next" : "Ok"}
                                    </Button>
                                </li>
                            ))}
                    </ul>
                </DialogueBox>
            </div>
        </div>
    );
};
