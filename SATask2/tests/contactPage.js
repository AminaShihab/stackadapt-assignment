class contactPage extends basePage {
    async contactFunc() {
        let element = await driver.findElement(By.xpath(`//*[@id="shopify-section-footer"]/footer/div[2]/div/div/div/div/div[1]/h4`)).isDisplayed();
        if (element) {
            System.out.println("Information available");
        } else {
            System.out.println("Element is not dispalyed");
        }
    }
}