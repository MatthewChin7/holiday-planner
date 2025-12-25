import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0F172A", // Slate 900
                    foreground: "#F8FAFC",
                },
                secondary: {
                    DEFAULT: "#F59E0B", // Amber 500
                    foreground: "#0F172A",
                },
                muted: {
                    DEFAULT: "#F1F5F9", // Slate 100
                    foreground: "#64748B",
                },
                accent: {
                    DEFAULT: "#10B981", // Emerald 500
                    foreground: "#FFFFFF",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-outfit)"],
            },
        },
    },
    plugins: [],
};
export default config;
