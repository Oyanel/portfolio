export type DialogueLine = {
    text: string;
};

export type DialogueOption = {
    text: string;
    nextEventKey: `DIALOGUE_BRANCH:${string}` | `DIALOGUE_END`;
};

export type DialogueEntry = {
    dialogue: DialogueLine[];
    options?: DialogueOption[];
};

export type DialoguesAtlas = {
    [dialogueKey: string]: DialogueEntry;
};
