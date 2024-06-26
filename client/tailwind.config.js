/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
        require("flowbite-react/tailwind").content()

    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
}