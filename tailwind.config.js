/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "rgb(var(--color-bg))",
                text: "rgb(var(--color-text))",
                muted: "rgb(var(--color-muted))",
                brand: "rgb(var(--color-brand))",
                accent: "rgb(var(--color-accent))",
                elevated: "rgb(var(--color-elevated))",
                border: "rgb(var(--color-border))",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                DEFAULT: "var(--radius-md)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                full: "var(--radius-full)",
            },
            boxShadow: {
                card: "var(--shadow-card)",
                elevated: "var(--shadow-elevated)",
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1200px",
                    "2xl": "1280px",
                },
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
        },
    },
    plugins: [],
}
