module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    coverageDirectory: '<rootDir>/coverage',  // Directory for coverage reports
    collectCoverage: true,                      // Enable coverage collection
    collectCoverageFrom: [                      // Specify which files to collect coverage from
        "src/**/*.{ts,tsx}",
        "!src/index.ts"                         // Exclude main entry point
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};