type NavigationLink = {
    href: string;
    label: string;
    style?: "glitch";
};

export const navigationLinks = [
    {
        href: "/",
        label: "Home",
    },
] satisfies NavigationLink[];

export const hackedLink = {
    href: "/unknown-game",
    label: "Unknown Game",
} satisfies NavigationLink;
