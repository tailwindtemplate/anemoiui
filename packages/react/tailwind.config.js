module.exports = {
    purge: {
        content: ['./pages/**/*.tsx', './src/**/*.tsx'],
        options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
