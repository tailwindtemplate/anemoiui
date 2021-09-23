// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    purge: {
        content: [
            // external paths
            `${path.dirname(require.resolve('@anemoiui/react/package.json'))}/**/*.js`,

            // internal paths
            './src/**/*.tsx',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
