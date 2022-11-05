import style from "./ProjectCard.module.scss";
import Image from "next/image";
import background from "/public/images/backgroundDefault.jpg";

interface IParams {
    isSelected: boolean;
    onClick(index: number): void;
}

export const ProjectCard = (props: IParams) => {
    const { isSelected } = props;

    return (
        <div className={`${style.project} ${isSelected}`}>
            <Image alt="b1" layout="fill" objectFit="cover" src={background} />
            <div className={style.projectCard}>
                <div className={style.projectCardText}>
                    <p>Mary b. Decoration</p>
                    <p>A Home designer web site</p>
                    <p>A collaboration with a UI/UX designer</p>
                </div>
            </div>
        </div>
    );
};
