import { Game, Scene } from "phaser";

interface State {
    game?: Game;
    scene?: Scene;
}

class Store<T extends State> {
    state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }

    set<K extends keyof T>(key: K, value: T[K]) {
        this.state[key] = value;
    }

    get<K extends keyof State>(key: K): T[K] {
        return this.state[key];
    }
}

export const store = new Store<State>({});