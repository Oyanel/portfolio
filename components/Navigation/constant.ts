type NavigationLink = {
    href: string;
    label: string;
}

export const navigationLinks = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/dev-ground',
        label: 'Dev Ground'
    }
] satisfies NavigationLink[];