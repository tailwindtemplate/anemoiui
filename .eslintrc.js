module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            tsx: true
        }
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import', 'simple-import-sort'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    root: true,
    env: {
        node: true,
    },
    rules: {
        'sort-imports': 0,
        'import-order': 0,
        'simple-import-sort/sort': 'error',
        'prettier/prettier': 2,
    },
};
