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
                            <strong>Explore my work and learn about my professional journey.</strong>{" "}
                            Take your time to uncover hidden details about my projects and what I can offer.
                        </p>
                        <p className={style.text}>
                            My contact info is in the footer if you&#39;d like to reach out.
                        </p>
                        <div className={style.commandContainer}>
                            <div className={style.commandMove}>
                                <Commands disabled />
                                <p className={style.text}>to move</p>
                            </div>
                            <div className={style.commandEContainer}>
                                <Button className={style.commandE} variant="command">
                                    E
                                </Button>
                                <p className={style.text}>to interact</p>
                            </div>
                        </div>
                        <div className={style.actions}>
                            <Button onClick={onPassTuto} variant="dialogue" autoFocus>
                                OK, let&#39;s go
                            </Button>
                        </div>
                    </div>
                </DialogueBox>
            </div>
        </div>
    );
};
