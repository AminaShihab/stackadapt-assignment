class accountPage extends registerPage {
    async accountFunction() {
        registerPage.registerFunction();

        //verify order section
        await driver.findElement(By.xpath(`//*[@id="MainContent"]/div/div[3]/div/div/div[1]/div/a`)).click();
        let element1 = await driver.findElement(By.xpath(`//*[@id="MainContent"]/div/div[4]/div/p`)).isDisplayed();
        if (element1) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        //verify cart sections
        await driver.findElement(By.xpath(`//*[@id="bc-sf-filter-top-sorting"]/select"]`)).click();
        let element = await driver.findElement(By.xpath(`//*[@id="bc-sf-filter-top-sorting"]/select`)).isDisplayed();

        //Add a product and verify cart section
        await driver.findElement(By.xpath(`//*[@id="product_single"]/div/span[2]/span[2]/span`)).click();
        await driver.findElement(By.xpath(`//*[@id="shopify-section-collection"]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/form/button/span`)).click();
        await driver.findElement(By.xpath(`//*[@id="shopify-section-header"]/div[1]/div/div[3]/div/div[4]/a/span/svg/path[1]`)).click();
        let element2 = await driver.findElement(By.xpath(`//*[@id="MainContent"]/div/div/div[3]/div[2]/div[1]/div[2]/div[1]/button`));
        if (element2) {
            System.out.println("item displayed in cart");
        } else {
            System.out.println("not working");
        }

        //remove the product and verify cart section
        await driver.findElement(By.xpath(`//*[@id="cart-table"]/tbody/tr/td[3]/a/span[2]/svg`)).click();
        let element3 = await driver.findElement(By.xpath(`//*[@id="MainContent"]/div/div/div[3]/div[1]/div/p[1]`));
        if (element3) {
            System.out.println("cart is empty");
        } else {
            System.out.println("not working");
        }
    }
}