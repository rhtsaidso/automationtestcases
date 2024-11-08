const { spawn } = require('child_process');

const testFiles = [
    'tests/testCase1.js',
    'tests/testCase2.js',
    'tests/testCase3.js',
    'tests/testCase4.js',
    'tests/testCase5.js',
    'tests/testCase6.js'
];

function runTest(testFile) {
    return new Promise((resolve, reject) => {
        console.log(`Running ${testFile}...`);
        const process = spawn('node', [testFile]);

        process.stdout.on('data', (data) => {
            console.log(`${testFile}: ${data}`);
        });

        process.stderr.on('data', (data) => {
            console.error(`${testFile} error: ${data}`);
        });

        process.on('close', (code) => {
            console.log(`${testFile} finished with code ${code}`);
            resolve();
        });
    });
}

(async function runAllTests() {
    for (const testFile of testFiles) {
        await runTest(testFile);
    }
    console.log("All tests completed.");
})();
