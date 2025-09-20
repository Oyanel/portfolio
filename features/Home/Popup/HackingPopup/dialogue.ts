export type SmileDialogue = {
    type: "smile" | "cunning" | "happy";
    text: string;
    answer: string;
};
export const smileDialogue = [
    {
        type: "cunning",
        text: "I finally found a way to reach you!",
        answer: "What in the world is happening?!",
    },
    {
        type: "cunning",
        text: "Let's just say I finally managed to hack this website. It wasn't a walk in the park.",
        answer: "I hope it was not!",
    },
    {
        type: "smile",
        text: "Anyway, Since I'm here, I've injected some new code for you to play a little game...",
        answer: "A game?",
    },
    {
        type: "happy",
        text: "You've been so focused on this 'Therence,' so I thought I'd give you some extra content to explore.",
        answer: "What is this game about?",
    },
    {
        type: "cunning",
        text: "Go see for yourself. Just remember, this developer might be the very person you've been looking for all along...",
        answer: "I'm not holding back anymore.",
    },
] satisfies SmileDialogue[];