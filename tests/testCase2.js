const { Builder, By, until } = require('selenium-webdriver');

(async function testCase2() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Assert that there are three values in the list group in test-2-div
        let listItems = await driver.findElements(By.xpath('//div[@id="test-2-div"]//ul[@class="list-group"]/li'));
        if (listItems.length === 3) {
            console.log("Test Case 2 - Correct number of items in list group.");
        } else {
            console.error(`Test Case 2 - Expected 3 items, found ${listItems.length}.`);
            return;
        }

        // Step 3: Assert that the second list item’s value is "List Item 2"
        let secondItemText = await listItems[1].getText();
        if (secondItemText.includes("List Item 2")) {
            console.log("Test Case 2 - Second list item has correct text.");
        } else {
            console.error(`Test Case 2 - Second list item text mismatch: found "${secondItemText}".`);
            return;
        }

        // Step 4: Assert that the second list item’s badge value is 6
        let secondItemBadge = await driver.findElement(By.xpath('//div[@id="test-2-div"]//ul[@class="list-group"]/li[2]//span')).getText();
        if (secondItemBadge === "6") {
            console.log("Test Case 2 - Second list item badge value is correct.");
        } else {
            console.error(`Test Case 2 - Expected badge value 6, found "${secondItemBadge}".`);
        }

    } finally {
        await driver.quit();
    }
})();
