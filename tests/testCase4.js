const { Builder, By } = require('selenium-webdriver');

(async function testCase4() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Locate the first and second buttons in test-4-div
        let firstButton = await driver.findElement(By.xpath('//div[@id="test-4-div"]//button[1]'));
        let secondButton = await driver.findElement(By.xpath('//div[@id="test-4-div"]//button[2]'));

        // Check if the first button is enabled
        let isFirstButtonEnabled = await firstButton.isEnabled();
        if (isFirstButtonEnabled) {
            console.log("Test Case 4 - First button is enabled.");
        } else {
            console.error("Test Case 4 - First button is not enabled.");
            return;
        }

        // Check if the second button is disabled
        let isSecondButtonDisabled = !(await secondButton.isEnabled());
        if (isSecondButtonDisabled) {
            console.log("Test Case 4 - Second button is disabled.");
        } else {
            console.error("Test Case 4 - Second button is not disabled.");
        }

    } finally {
        await driver.quit();
    }
})();
