const { Builder, By } = require('selenium-webdriver');

(async function testCase6() {
    let driver = await new Builder().forBrowser('chrome').build();

    // Function to get cell value from the table by row and column (0-indexed)
    async function getCellValue(row, column) {
        let cell = await driver.findElement(By.xpath(`//div[@id="test-6-div"]//table/tbody/tr[${row + 1}]/td[${column + 1}]`));
        return await cell.getText();
    }

    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Retrieve the value of the cell at (2, 2)
        let cellValue = await getCellValue(2, 2);

        // Step 3: Assert that the cell value is "Ventosanzap"
        if (cellValue === "Ventosanzap") {
            console.log("Test Case 6 - Cell value at (2, 2) is correct: Ventosanzap.");
        } else {
            console.error(`Test Case 6 - Cell value mismatch: found "${cellValue}" instead of "Ventosanzap".`);
        }

    } finally {
        await driver.quit();
    }
})();
