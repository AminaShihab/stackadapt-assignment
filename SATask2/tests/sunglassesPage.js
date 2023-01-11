class giftPage extends basePage {
    async gift() {
        await driver.findElement(By.xpath(`//*[@id="bc-sf-filter-top-sorting"]/select"]`)).click();
        let element = await driver.findElement(By.xpath(`//*[@id="bc-sf-filter-top-sorting"]/select`)).isDisplayed();
        if (element) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }
    }
}