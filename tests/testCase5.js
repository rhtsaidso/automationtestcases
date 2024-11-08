const { Builder, By, until } = require('selenium-webdriver');

(async function testCase5() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Wait for the button in test-5-div to appear
        let test5Button = await driver.wait(
            until.elementLocated(By.id('test5-button')),
            10000 // Wait up to 10 seconds
        );
        await driver.wait(until.elementIsVisible(test5Button), 10000);
        console.log("Test Case 5 - Button is now visible.");

        // Step 3: Click the button
        await test5Button.click();
        console.log("Test Case 5 - Button clicked.");

        // Step 4: Assert that the success message is displayed
        let successMessage = await driver.wait(
            until.elementLocated(By.id('test5-alert')),
            5000
        );
        let isMessageDisplayed = await successMessage.isDisplayed();
        if (isMessageDisplayed) {
            console.log("Test Case 5 - Success message is displayed.");
        } else {
            console.error("Test Case 5 - Success message is not displayed.");
            return;
        }

        // Step 5: Assert that the button is now disabled
        let isButtonDisabled = !(await test5Button.isEnabled());
        if (isButtonDisabled) {
            console.log("Test Case 5 - Button is now disabled.");
        } else {
            console.error("Test Case 5 - Button is still enabled.");
        }

    } finally {
        await driver.quit();
    }
})();
