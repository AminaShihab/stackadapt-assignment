// Add tasks from excel
const reader = require('xlsx')
const file = reader.readFile('./test/specs/taskupload.xlsx')
let data = [] 
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}


for(let i=0; i< data.length ;i++)
{
    let addTask = data[i]["Add Task"]
    let editTask = data[i]["Edit Task"]
    
     console.log(addTask)
     console.log(editTask)
}