import reactPlugin from "eslint-plugin-react";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    {
        ignores: ["node_modules/**/*", "dist/**/*", "build/**/*", ".next/**/*", "**/*.js", "**/*.d.ts"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@next/next": nextPlugin,
            "@typescript-eslint": tseslint.plugin,
            '@stylistic': stylistic
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-require-imports": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
        },
    },
    {
        // disable type-aware linting on JS files
        files: ["**/*.js"],
        ...tseslint.configs.disableTypeChecked,
    },
    tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    reactHooks.configs["recommended-latest"],
    eslint.configs.recommended,
);
