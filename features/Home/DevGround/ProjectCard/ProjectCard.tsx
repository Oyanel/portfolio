import style from "./ProjectCard.module.scss";
import Image from "next/image";
import background from "/public/images/backgroundDefault.jpg";

interface IParams {
    isSelected: boolean;
    onClick(): void;
}

export const ProjectCard = (props: IParams) => {
    const { isSelected, onClick } = props;

    const selectedStyle = isSelected ? style.isSelected : "";

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className={`${style.project} ${selectedStyle}`} onClick={onClick}>
            <Image alt="b1" layout="fill" objectFit="cover" src={background} />
            <div className={`${style.projectCard} ${selectedStyle}`}>
                <div className={style.projectCardText}>
                    <p>Mary b. Decoration</p>
                    <p>A Home designer web site</p>
                    <p>A collaboration with a UI/UX designer</p>
                </div>
            </div>
        </div>
    );
};
