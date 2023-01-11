describe('Sign Up', () => {
    it('Validate SignUp page', async () => {
        await browser.url("http://stackadapt-interview.us-east-1.elasticbeanstalk.com/");
        const signup = $(`//*[@id="menu"]/ul/li[1]/a`);
        const name = $(`//*[@id="name"]`);
        const email = $(`//*[@id="email"]`);
        const password = $(`//*[@id="password"]`);
        const terms = $(`//*[@id="agree"]`);
        const submit = $(`//*[@id="submit"]`);

        await (await signup).click();
        await (await name).setValue("Amina")
        await (await email).setValue("amina.shihaStack434@gmail.com")
        await (await password).setValue("Amina123")
        await (await terms).click();
        await (await submit).click();

    })

    it('Add task and Edit task test', async () => {
        // Add tasks from excel
        const reader = require('xlsx')
        const file = reader.readFile('./test/specs/taskupload.xlsx')
        let data = []
        const sheets = file.SheetNames
        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }
        //------------------------
        var task = $$('//a[@class="nav-link dropdown-toggle"]')[0]
        const addTask = $('//a[@class="dropdown-item" and text()="Add Task"]')
        const taskValue = $('//*[@id="task"]')
        const saveTask = $('//*[@id="submit"]')

        for (let i = 0; i < data.length; i++) {
            let addTaskFromExcel = data[i]["Add Task"]
            await (await task).click();
            await (await addTask).click();
            await (await taskValue).setValue(addTaskFromExcel)
            await (await saveTask).click(); 
        }

    
        for (let i = 0; i < data.length; i++) {            
            let addTaskFromExcel = data[i]["Add Task"]
            let editTaskFromExcel = data[i]["Edit Task"]
            const editTask = $(`//div[@class="container"]//th[text()="My Tasks"]//..//..//..//tbody//td[text()="${addTaskFromExcel}"]//..//div//a[@class="btn btn-outline-secondary" and text()="Edit"]`)
            const taskArea = $(`//div/textarea[text()="${addTaskFromExcel}"]`) 
            await (await editTask).click();
            await (await taskArea).clearValue();
            await (await taskArea).setValue(editTaskFromExcel)
            await (await saveTask).click(); 
        }
    })

    it('Delete task leaving 1 task', async () => {
        const deleteTaskCount= await $$('//div[@class="container"]//th[text()="My Tasks"]//..//..//..//tbody//td//..//div//a[@class="btn btn-outline-danger" and text()="Delete"]').length     
        for (let i = 0; i < deleteTaskCount.length - 1; i++) {  
            const deleteTask = $$('//div[@class="container"]//th[text()="My Tasks"]//..//..//..//tbody//td//..//div//a[@class="btn btn-outline-danger" and text()="Delete"]')[i]
            await (await deleteTask).click();

        } 

    })

    it('View tasks after deleting all except one task', async () => {

        const viewTask = $('//div[@class="container"]//th[text()="My Tasks"]//..//..//..//tbody//td[text()="edittask1"]//..//div//a[@class="btn btn-outline-primary" and text()="View"]')
        await (await viewTask).click();

        var task = $$('//a[@class="nav-link dropdown-toggle"]')[0]
        await (await task).click();
        const viewTaskfromProfile = $('//*[@id="menu"]/ul/li[1]/div/a[2]')
        await (await viewTaskfromProfile).click();

        const title = $('//div[@class="container"]//th[text()="My Tasks"]')
        const taskCount= await $$('//div[@class="container"]//th[text()="My Tasks"]//..//..//..//tbody//td//..//div//a[@class="btn btn-outline-primary" and text()="View"]').length     
        await expect(title).toHaveText("My Tasks")
        await expect(taskCount).length == 1

    })

    it('Validate logout ', async () => {
        var profile = $$('//a[@class="nav-link dropdown-toggle"]')[1]
        const logout = $(`//a[@class="dropdown-item" and text()="Logout"]`)

        await (await profile).click();
        await (await logout).click();

    })

    it('Validate login ', async () => {
        const login = $(`//*[@id="menu"]/ul/li[2]/a`)
        const email = $(`//*[@id="login"]`)
        const password = $(`//*[@id="password"]`)
        const submit =$(`//*[@id="submit"]`)
        const loginTitle = $(`//div[@class="container"]//th[text()="My Tasks"]`)

        await (await login).click();
        await (await email).setValue("ami.shihabstack@gmail.com")
        await (await password).setValue("Amina123")
        await (await submit).click();
        await expect(loginTitle).toHaveText("My Tasks")

    })
})