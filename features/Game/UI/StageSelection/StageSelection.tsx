import style from "./StageSelection.module.scss";
import Image from "next/image";
import { useStageSelection } from "@/features/Game/UI/StageSelection/useStageSelection";
import { stageList } from "@/features/Game/UI/StageSelection/constant";
import classNames from "classnames";
import { Button } from "@/components/Buttons/Button/Button";

export const StageSelection = () => {
    const { selectedStage, selectStage, onStageChange } = useStageSelection();

    return (
        <section className={style.stageSelectionRoot}>
            <div className={style.background}>
                <Image
                    src={selectedStage.image}
                    alt={selectedStage.alt}
                    className={style.backgroundImage}
                    fill
                    priority
                />
                <div className={style.mask} />
            </div>
            <div className={style.content}>
                <h2 className={style.stageName}>{selectedStage.label}</h2>
                <div className={style.stageListContainer}>
                    <p className={style.selectText}>Select a Stage</p>
                    <ul className={style.stageList}>
                        {stageList.map((stage) => (
                            <li
                                key={stage.id}
                                className={classNames(style.stage, {
                                    [style.isSelected]: selectedStage.id === stage.id,
                                })}
                            >
                                <button
                                    className={style.stageButton}
                                    onClick={function () {
                                        onStageChange(stage);
                                    }}
                                >
                                    <div className={style.imageContainer}>
                                        <Image
                                            alt={stage.alt}
                                            src={stage.image}
                                            className={style.stageImage}
                                            width={150}
                                            height={150}
                                            priority
                                        />
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button variant="primary" onClick={selectStage}>
                    Play !
                </Button>
            </div>
        </section>
    );
};
