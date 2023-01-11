class loginPage extends sunglassesPage {
    async gift() {
        await driver.findElement(By.xpath(`//*[@id="shopify-section-header"]/div[1]/div/div[3]/div/div[2]/a/svg/path`)).click();
        let element1 = await driver.findElement(By.xpath(`//*[@id="CustomerEmail"]`)).isDisplayed();
        if (element1) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        let element2 = await driver.findElement(By.xpath(`//*[@id="CustomerPassword"]`)).isDisplayed();
        if (element2) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }

        let element3 = await driver.findElement(By.xpath(`//*[@id="customer_login"]/div[3]/div[1]/button`)).isDisplayed();
        if (element3) {
            System.out.println("Element is dispalyed");
        } else {
            System.out.println("Element is not dispalyed");
        }


        loginVerify.then(function() {

                // Step 2 - Finding the username input
                let userName =
                    tab.findElement(By.xpath(`//*[@id="shopify-section-header"]/div[1]/div/div[3]/div/div[2]/a/svg/path`));
                return userName;
            })
            .then(function(usernameBox) {

                // Step 3 - Entering the username
                let fillUserName =
                    usernameBox.sendKeys("ami.shihab12@gmail.com");
                return fillUserName;
            })
            .then(function() {
                console.log(
                    "Success"
                );

                // Step 4 - Finding the password input
                let passwordBox =
                    tab.findElement(swd.findElement(By.xpath(`//*[@id="CustomerPassword`)));
                return passwordBox;
            })
            .then(function(passwordBox) {

                // Step 5 - Entering the password
                let promiseFillPassword =
                    passwordBox.sendKeys("StackAdapt12!@");
                return promiseFillPassword;
            })
            .then(function() {
                console.log(
                    "Password entered successfully"
                );

                // Step 6 - Finding the Sign In button
                let signInBtn = tab.findElement(
                    swd.By.xpath(`//*[@id="customer_login"]/div[3]/div[1]/button`)
                );
                return signInBtn;
            })
            .then(function(signInBtn) {

                // Step 7 - Clicking the Sign In button
                let signInBtn = signInBtn.click();
                return signInBtn;
            })
            .then(function() {
                console.log("Successfully signed");
            })
            .catch(function(err) {
                console.log("Error ", err, " occurred!");
            });
    }
}