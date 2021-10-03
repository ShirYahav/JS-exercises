const people = []
const properties = [
    'id',
    'firstName',
    'lastName',
    'hobby',
    'gender',
    'profileUrl'
]
const headers = {
    id: 'id',
    firstName: 'first Name',
    laststName: 'last tName',
    hobby: 'hobby',
    gender: 'gender',
    ProfileUrl: 'profileUrl',
    edit : 'edit',
    deletePerson : 'delete'
}

function add() {
    event.preventDefault()//come back to the later
    const errorInFields = document.querySelector('.errorInFields')
    const person = {}
    const form = document.querySelector('form')
    for (let property of properties) {
        person[property] = form.elements[property].value
    }
    if(isSameId(people)){
        errorInFields.innerHTML = "id already exist"
        renderTable(false);
    }else{
        errorInFields.innerHTML = "";
        console.log(people)
        people.push(person);//you can push only to an array!!
        renderTable();
    }
}

function isSameId(arrOfobjects){
    const form = document.querySelector('form')
    const id = form.elements['id'].value
    for(let i = 0; i<arrOfobjects.length; i++){
        if(arrOfobjects[i].id === id){
            return true
        }
    }
}

function createTd(text) {
    const td = document.createElement('td');
    td.innerHTML = text
    return td
}


function createTr(obj) {
    const tr = document.createElement('tr');
    for (let property in obj) { //in is both for array(index) and obj(property name)
        let td
        if (property === "profileUrl") {
            const img = createImg(obj[property])
            td = createTd('')
            td.appendChild(img)
            //td = createTd('<img src ="'+ obj[prop] +'">')
            //<img src ="sdsf">
        }else{
            td = createTd(obj[property]) //value of property
        }
        tr.appendChild(td)// td will be the child of tr 
    }
    return tr;
} //i have a situation where i want my td to be either img or text so : let td

function createImg(src) {
    const img = document.createElement('img')
    img.src = src
    return img
}

function createHeaders() {
    const tableHeaders = createTr(headers)
    return tableHeaders
}

function createTable(arrOfobjects) {
    const table = document.createElement('table')
    const tableHeaders = createHeaders()
    table.appendChild(tableHeaders)
    for (obj of arrOfobjects) { //for of is not for obj!!!
            const tr = createTr(obj)
            const tdEdit = createTd("<button onclick=edit('"+ obj.id +"')>Edit</button>")
            tr.appendChild(tdEdit)
            const tdDelete = createTd("<button onclick=deletePerson('"+ obj.id +"'>Delete</button>")
            tr.appendChild(tdDelete)
            table.appendChild(tr)
    }
    return table
}

function findPerson(id){ //lets find the person first how? by the id
    for(let person of people){
        if (person.id === id){
            return person
        }
    }
}

 function loadPerson0Details(editPerson){ //now lets render person back to form
    const form = document.querySelector('form')
    for (let property of properties) {
        form.elements[property].value = editPerson[property]
    }
}

function edit(id){//now we put variable on the person we want to edit and load it to form
    const editPerson = findPerson(id)
    loadPerson0Details(editPerson)
    //after we render person to form we want ro hide add and show update
    const addButton = document.querySelector(".addButton")
    const updateButton = document.querySelector(".updateButton")
    addButton.classList.add('hidden')
    updateButton.classList.remove('hidden')
}

function update(){
    //we track the new input from the form
    //for people track the person with the same id and then use obj ref to change it 
    event.preventDefault()
    const form = document.querySelector('form')
    const person = {}
    for (let property of properties) {
        person[property] = form.elements[property].value
        for(let updatedPerson of people){
            if(updatedPerson.id === person.id){
                updatedPerson[property] = person[property] //object by refference
            }
        }
    }
    renderTable()
    const addButton = document.querySelector(".addButton")
    const updateButton = document.querySelector(".updateButton")
    addButton.classList.remove('hidden')
    updateButton.classList.add('hidden')
}

function deletePerson(person){//think about it
   const findDeletePerson = findPerson(person.id)
   for(let i in people){
      if(people[i] === findDeletePerson){
          people.splice(i,person)
      }
   }
   renderTable()
}

function renderTable() {
    const table = createTable(people) // i havw to send the arrOfobjects here!! (people)
    const container = document.querySelector('div.list')
    container.innerHTML = '' //reseting the table so it wont show headers again
    container.appendChild(table)
}
//renderTable(); //if i already have a person so it will render
