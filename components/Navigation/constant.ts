type NavigationLink = {
    href: string;
    label: string;
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
