const { Builder, By, until } = require('selenium-webdriver');

(async function testCase1() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the home page
        await driver.get("file:///C:/Users/bhavb/OneDrive/Desktop/AutomationtestCases/QE-index.html");

        // Step 2: Assert presence of email, password, and login button
        let emailPresent = await driver.findElement(By.xpath('//input[@type="email"]')).isDisplayed();
        let passwordPresent = await driver.findElement(By.xpath('//input[@type="password"]')).isDisplayed();
        let loginButtonPresent = await driver.findElement(By.xpath('//button[@type="submit"]')).isDisplayed();

        if (emailPresent && passwordPresent && loginButtonPresent) {
            console.log("Test Case 1 - Email, Password, and Login button are present.");
        } else {
            console.error("Test Case 1 - Required elements are missing.");
            return;
        }

        // Step 3: Enter an email address and password
        await driver.findElement(By.xpath('//input[@type="email"]')).sendKeys('test@example.com');
        await driver.findElement(By.xpath('//input[@type="password"]')).sendKeys('password123');
        console.log("Test Case 1 - Email and Password entered successfully.");

    } finally {
        await driver.quit();
    }
})();
