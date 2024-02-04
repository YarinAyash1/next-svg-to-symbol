export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Next.js",
    description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    mainNav: [
        {
            title: "SVG to Symbol",
            href: "/",
        },
        {
            title: "Symbol to SVG",
            href: "/symbol-to-svg",
        },
    ],
    links: {
        github: "https://github.com/YarinAyash1/svg-to-symbol-app",
    },
}
