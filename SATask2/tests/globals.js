class globals extends basePage {
    async globalFun() {
        await driver.findElement(By.xpath(`//*[@id="shopify-section-header"]/div[1]/div/div[3]/div/div[5]/ul/li/span/svg`)).click();
        await driver.findElement(By.xpath(`//*[@id="shopify-section-header"]/div[1]/div/div[3]/div/div[5]/ul/li/ul/li[1]/a`)).click();
        let element = await driver.findElement(By.xpath(`//*[@id="se-cookies-message"]/div[1]/text()`)).isDisplayed();
        if (element) {
            System.out.println("Select Country available");
        } else {
            System.out.println("Element is not dispalyed");
        }
    }
}