module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    rules: {
        indent: [2, 4],
        'no-multi-spaces': [2, { ignoreEOLComments: false }],
        'quotes': [2, 'single'],
        semi: [2, 'never']
    },
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
}
