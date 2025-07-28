import { Button } from "@/components/Buttons/Button/Button";
import style from "./Tuto.module.scss";
import { DialogueBox } from "@/features/Game/UI/components/dialogBox/dialogueBox";
import { useCallback } from "react";
import { eventManager } from "@/features/Game/EventManager";

export const Tuto = () => {
    const onPassTuto = useCallback(() => {
        eventManager.emit({ type: "EXIT" });
    }, []);

    return (
        <div className={style.tutoRoot}>
            <div className={style.tutoContainer}>
                <DialogueBox>
                    <p className={style.text}>
                        Hello There ! You decided to check the dev ground ? Not everybody make it this far ...
                    </p>
                    <p className={style.text}>
                        In this game you can go at your own pace to find items related to my job.
                    </p>
                    <p className={style.text}>
                        To learn more about me and what I do, just press &#34;E&#34; on your keyboard when indicated.
                    </p>
                    <p className={style.text}>I hope this little game makes it more fun to learn about me.</p>
                    <p className={style.text}>
                        If you have more questions or want to contact me, you have my contact info in the footer !
                    </p>
                    <p className={style.text}>Have fun !</p>
                    <div className={style.actions}>
                        <Button onClick={onPassTuto} variant="dialogue">
                            OK, Let&#39;s go
                        </Button>
                    </div>
                </DialogueBox>
            </div>
        </div>
    );
};
