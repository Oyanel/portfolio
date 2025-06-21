import { useEffect, useLayoutEffect } from "react";
import StartGame from "./main";
import { eventManager } from "../EventManager";
import { ReadyGameEvent } from "@/features/Game/game/Events.type";
import { store } from "@/features/Game/Store";

export const PhaserGame = () => {
    useLayoutEffect(() => {
        const game = StartGame("game-container");
        store.set("game", game);

        return () => {
            game.destroy(true);
        };
    }, []);

    useEffect(() => {
        eventManager.on("SCENE_READY", (event) => {
            const { sceneInstance } = event as ReadyGameEvent;
            store.set("scene", sceneInstance);
        });
        return () => {
            eventManager.removeListener("SCENE_READY");
        };
    }, []);

    return <div id="game-container" />;
};
