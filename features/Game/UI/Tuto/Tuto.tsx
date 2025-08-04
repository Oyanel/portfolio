import { Button } from "@/components/Buttons/Button/Button";
import style from "./Tuto.module.scss";
import { DialogueBox } from "@/features/Game/UI/components/dialogBox/dialogueBox";
import { useCallback } from "react";
import { eventManager } from "@/features/Game/EventManager";
import { Commands } from "@/features/Game/UI/commands/commands";

export const Tuto = () => {
    const onPassTuto = useCallback(() => {
        eventManager.emit({ type: "EXIT" });
    }, []);

    return (
        <div className={style.tutoRoot}>
            <div className={style.tutoContainer}>
                <DialogueBox>
                    <div className={style.dialogue}>
                        <p className={style.text}>Step into my code ground!</p>
                        <p className={style.text}>
                            Here, you&#39;ll <strong>explore my work and learn about my professional journey</strong>{" "}
                            through an engaging experience. Take your time to uncover hidden details about my projects
                            and what I bring to the table.
                        </p>
                        <p className={style.text}>
                            Enjoy the discovery, and my contact information is in the footer if you&#39;d like to
                            connect!{" "}
                        </p>
                        <div className={style.commandContainer}>
                            <div className={style.commandMove}>
                                <Commands disabled />
                                <p className={style.text}>to Move</p>
                            </div>
                            <div className={style.commandEContainer}>
                                <Button className={style.commandE} variant="command">
                                    E
                                </Button>
                                <p className={style.text}>to Interact with the Object</p>
                            </div>
                        </div>
                        <div className={style.actions}>
                            <Button onClick={onPassTuto} variant="dialogue" autoFocus>
                                OK, Let&#39;s go
                            </Button>
                        </div>
                    </div>
                </DialogueBox>
            </div>
        </div>
    );
};
