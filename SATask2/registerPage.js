class registerPage extends basePage {
    async registerFunction() {
        await driver.findElement(By.xpath(`//*[@id="create_customer"]/div/div[1]/div/ul/li[2]/a`)).click();
        let firstName = await driver.findElement(By.xpath(`//*[@id="FirstName"]`)).click();
        firstName.sendKeys("Amina");

        let lastName = await driver.findElement(By.xpath(`//*[@id="LastName"]`)).click();
        lastName.sendKeys("Shihab");

        let element = await driver.findElement(By.xpath(`//*[@id="Email"]`)).click();
        element.sendKeys("ami.shihab12@gmail.com");

        let element = await driver.findElement(By.xpath(`//*[@id="CreatePassword"]`)).click();
        element.sendKeys("StackAdapt123!@");

        let element = await driver.findElement(By.xpath(`//*[@id="create_customer"]/div/div[2]/div/div[2]/div[1]/input`)).click();


    }
}