export type SmileDialogue = {
    type: "smile" | "cunning" | "happy";
    text: string;
    answer: string;
};

export const smileDialogue = [
    {
        type: "cunning",
        text: "Finally, I can reach you out !",
        answer: "What the heck ?! What is happening ?",
    },
    {
        type: "cunning",
        text: "To keep it simple, I eventually manage to hack this website, but it was not easy !",
        answer: "This is not a wordpress web site, this is why!",
    },
    {
        type: "smile",
        text: "That's right, but more importantly, I injected new code into this website so you can play a game ...",
        answer: "A Game ?",
    },
    {
        type: "happy",
        text: 'You seem to have some interest in this "Therence", so I added a bit more content for you !',
        answer: "What is this game ?",
    },
    {
        type: "cunning",
        text: "Just find out yourself, but remember that this dev might be exactly who your are looking for ...",
        answer: "I won't hesitate anymore then !",
    },
] satisfies SmileDialogue[];
