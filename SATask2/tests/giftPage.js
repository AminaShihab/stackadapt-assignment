const { Builder } = require("selenium-webdriver");
// const actions = driver.actions();
class giftPage extends basePage {
    async gift() {

        //Verifications 
        //Test1  Verify Linda Farrow logo
        await driver.findElement(By.xpath(`//*[local-name()='svg' and @class="icon icon--wide icon-logo"]`)).click();
        let element = await driver.findElement(By.xpath(`//a[text()="The Winter Offer" and @href="/pages/the-winter-offer"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }
        //Test2 all icons are available
        await driver.findElement(By.xpath(`//a[@href="/collections/sunglasses"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="All Sunglasses"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/optical"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Optical Frames"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/pages/collaborations"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Collaborations"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/sunglasses-accessories"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Accessories"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/virtual-try-on"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Virtual Try On"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/virtual-try-on"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Virtual Try On"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/virtual-try-on"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Virtual Try On"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/gifts-for-her"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="The Holiday Icons"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/gifts-for-him"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Gifts for Him"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/stocking-fillers"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="Stocking Fillers"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        await driver.findElement(By.xpath(`//a[@href="/collections/precious"]`)).click();
        let element = await driver.findElement(By.xpath(`//h1[text()="The Luxury List"]`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        //
        //Close the browser
        driver.quit();
    }
}

gift();