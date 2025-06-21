import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import StartGame from "./main";
import { eventManager } from "../EventManager";
import type { Game, Scene } from "phaser";
import { ReadyGameEvent } from "@/features/Game/game/Events.type";
import { store } from "@/features/Game/Store";

export const PhaserGame = forwardRef(function PhaserGame(_, ref) {
    const game = useRef<Game | null>(null);
    const scene = useRef<Scene | null>(null);

    useLayoutEffect(() => {
        if (game.current === null) {
            game.current = StartGame("game-container");
            store.set("game", game.current);
        }

        return () => {
            if (game.current) {
                game.current.destroy(true);
                if (game.current !== null) {
                    game.current = null;
                }
            }
        };
    }, [ref]);

    useEffect(() => {
        eventManager.on("SCENE_READY", (event) => {
            const { sceneInstance } = event as ReadyGameEvent;
            scene.current = sceneInstance;
            store.set("scene", scene.current);
        });
        return () => {
            eventManager.removeListener("SCENE_READY");
        };
    }, [ref]);

    return <div id="game-container" />;
});
