const { Builder } = require("selenium-webdriver");
// const actions = driver.actions();
class basePage {

    async example() {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();
        //Navigate to the main elements 
        await driver.get("https://us.lindafarrow.com/");

    }

};