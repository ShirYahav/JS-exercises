//const errorInFields = document.querySelector('div.errorInFields');
//const emptyfields = document.createElement('h3')
const people = []
const person = {}
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
    firstName: 'firstName',
    laststName: 'laststName',
    hobi: 'hobi',
    gender: 'gender',
    ProfileUrl: 'profileUrl',
}

function add() {
    event.preventDefault()//come back to the later
    const form = document.querySelector('form')
    for (let property of properties) {
        person[property] = form.elements[property].value
    }
    console.log(people)
    people.push(person); //you can push only to an array!!
    renderTable();
}


function createTd(text) {
    const td = document.createElement('td');
    td.innerHTML = text
    return td
}


function createTr(obj) {
    const tr = document.createElement('tr');
    for (let property in obj) {
        let td
        if (property === "profileUrl") {
            const img = createImg(obj[property])
            td = createTd('')
            td.appendChild(img)
        }
        else {
            td = createTd(obj[property]) //value of property
        }
        tr.appendChild(td)// td will be the child of tr 
    }
    return tr;
}

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
    for (obj of arrOfobjects) {
        const tr = createTr(obj)
        const tdEdit = createTd("<button onclick=edit(\""+ obj.id +"\")>Edit</button>")
        tr.appendChild(tdEdit)
        table.appendChild(tr)
    }
    return table
}

function edit(personId){
    debugger
    console.log(personId)
    for(let person of people){
        if(person.id === personId){
            console.log(person)
        }
    }
}

function renderTable() {
    const table = createTable(people)
    const container = document.querySelector('div.list')
    container.innerHTML = '' //reseting the table so it wont show headers again
    container.appendChild(table)
}

 //renderTable(); ->you call the function in add button
 
//  all fields must be filled
//  same id : this person is akready exist 
//  edit button will allow us to update fieds 
//  update button will update 
//  delete person 
//  different color every 