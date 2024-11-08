const { Builder, By } = require('selenium-webdriver');

(async function testCase3() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Assert that "Option 1" is the default selected value on the dropdown button
        let dropdownButton = await driver.findElement(By.id('dropdownMenuButton'));
        let defaultOption = await dropdownButton.getText();
        
        if (defaultOption === "Option 1") {
            console.log("Test Case 3 - Default selected value is correct.");
        } else {
            console.error(`Test Case 3 - Default selected value is incorrect: found "${defaultOption}".`);
            return;
        }

        // Step 3: Click the dropdown to display options, then select "Option 3"
        await dropdownButton.click();
        await driver.findElement(By.xpath('//div[@id="test-3-div"]//a[text()="Option 3"]')).click();
        console.log("Test Case 3 - Successfully selected 'Option 3'.");

    } finally {
        await driver.quit();
    }
})();
