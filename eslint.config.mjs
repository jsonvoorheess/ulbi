import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "quotes": [2, "double"],
            indent: [2, 4],
            "object-curly-spacing": ["error", "always"],
            "react/jsx-indent": ["error", 4],
            "no-shadow": "off"

        },
        globals: {
            "__IS_DEV__": true
        }
    }
]