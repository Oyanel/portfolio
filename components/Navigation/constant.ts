type NavigationLink = {
    href: string;
    label: string;
};

export const navigationLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/code-ground",
        label: "Code Ground",
    },
] satisfies NavigationLink[];
