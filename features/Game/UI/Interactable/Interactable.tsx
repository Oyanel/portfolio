import style from "./interactable.module.scss";

type Props = {
    isInteractable: boolean;
};

export const Interactable = ({ isInteractable }: Props) => {
    console.log("Interactable", isInteractable);
    return (
        <div className={style.interactableRoot}>
            <div className={style.container}>
                <p className={style.text}>press E to Interact with the Object</p>
            </div>
        </div>
    );
};
