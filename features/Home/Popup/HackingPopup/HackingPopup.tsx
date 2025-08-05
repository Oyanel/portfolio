import style from "./HackingPopup.module.scss";
import { DialogueBox } from "@/features/Game/UI/components/dialogBox/dialogueBox";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Buttons/Button/Button";
import smileImage from "@/public/game/smile/robot_smilling.png";
import cunningImage from "@/public/game/smile/robot_cunning.png";
import happyImage from "@/public/game/smile/robot_happy.png";
import { TypewriterText } from "@/components/TypewritterText/TypewriterText";
import { useHackingPopup } from "@/features/Home/Popup/HackingPopup/useHackingPopup";

const SMILES_IMAGES: Record<string, StaticImageData> = {
    cunning: cunningImage,
    happy: happyImage,
    smile: smileImage,
};

export const HackingPopup = () => {
    const { currentDialog, nextDialogueLine, closePopup } = useHackingPopup();

    return (
        <div className={style.hackingPopupRoot}>
            <div className={style.content}>
                <div className={style.imageContainer}>
                    <Image className={style.image} src={SMILES_IMAGES[currentDialog.type]} alt="" fill />
                </div>
                <DialogueBox>
                    <div className={style.dialogue}>
                        <TypewriterText text={currentDialog.text} className={style.text} />
                        <Button variant="dialogue" onClick={nextDialogueLine}>
                            {currentDialog.answer}
                        </Button>
                    </div>
                </DialogueBox>
            </div>
            <Button
                variant="command"
                className={style.close}
                onClick={closePopup}
                autoFocus
                aria-label="Close the modal"
            >
                X
            </Button>
        </div>
    );
};
