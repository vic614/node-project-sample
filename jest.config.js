module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    coveragePathIgnorePatterns: [".d.ts"],
    coverageThreshold: {
        global: {
            statements: 0,
            lines: 0,
            branches: 0,
            functions: 0,
        }
    },
    moduleFileExtensions: [
        "js",
        "json",
        "node",
        "ts",
        "tsx",
    ],
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"],
    testPathIgnorePatterns: [".d.ts"],
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    verbose: true
};
