import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import StartGame from './game/main';
import { EventBus } from './game/EventBus';
import type { Game, Scene } from "phaser";

export interface IRefPhaserGame
{
    game: Game | null;
    scene: Scene | null;
}

interface IProps
{
    currentActiveScene?: (scene_instance: Scene) => void
}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame({ currentActiveScene }, ref)
{
    const game = useRef<Game | null>(null!);

    useLayoutEffect(() =>
    {
        if (game.current === null)
        {

            game.current = StartGame("game-container");

            if (typeof ref === 'function')
            {
                ref({ game: game.current, scene: null });
            } else if (ref)
            {
                ref.current = { game: game.current, scene: null };
            }

        }

        return () =>
        {
            if (game.current)
            {
                game.current.destroy(true);
                if (game.current !== null)
                {
                    game.current = null;
                }
            }
        }
    }, [ref]);

    useEffect(() =>
    {
        EventBus.on('current-scene-ready', (scene_instance: Scene) =>
        {
            if (currentActiveScene && typeof currentActiveScene === 'function')
            {

                currentActiveScene(scene_instance);

            }

            if (typeof ref === 'function')
            {

                ref({ game: game.current, scene: scene_instance });
            
            } else if (ref)
            {

                ref.current = { game: game.current, scene: scene_instance };

            }
            
        });
        return () =>
        {

            EventBus.removeListener('current-scene-ready');
        
        }
    }, [currentActiveScene, ref]);

    return (
        <div id="game-container" />
    );

});
