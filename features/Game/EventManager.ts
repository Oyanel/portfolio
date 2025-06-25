import { Events } from "phaser";
import { GameEvent, UIEvent } from "@/features/Game/game/Events.type";

// Used to emit events between components, HTML and Phaser scenes
// A bit of abstraction to type correctly the emit and on
class EventManager {
    private eventEmitter = new Events.EventEmitter();

    emit = (event: GameEvent | UIEvent) => {
        const { type, ...rest } = event;
        console.log("emit", event);
        this.eventEmitter.emit(type, rest);
    };

    removeListener = (
        eventType: GameEvent["type"] | UIEvent["type"],
        callback?: (event: GameEvent | UIEvent) => void,
    ) => {
        this.eventEmitter.removeListener(eventType, callback);
    };

    on = (eventType: GameEvent["type"] | UIEvent["type"], callback: (event: GameEvent | UIEvent) => void) => {
        this.eventEmitter.on(eventType, callback);
    };
}

export const eventManager = new EventManager();
