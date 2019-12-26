module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'react-hooks',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
                'import/prefer-default-export': 'off',
                'no-console': ['error', { allow: ['tron'] }],
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
            },
        ],
    },
};
