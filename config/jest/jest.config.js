

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,

    coverageProvider: "babel",
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],

    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: [
        "css",
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "scss",
        "node"
    ],
    rootDir: "../../",

    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
    ],

    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|scss)$": "babel-jest"
    },

};

module.exports = config;
