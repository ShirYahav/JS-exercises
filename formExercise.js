//function to add details to an objects
const addButton = document.querySelector('button.addButton')
const errorInFields = document.querySelector('div.errorInFields');
const emptyfields = document.createElement('h3')
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
    if (required(people) === true){
        emptyfields.innerHTML=''
        //console.log(people)
        people.push(person); //you can push only to an array!!
        renderTable();
    }else{
        //emptyfields.innerHTML=''
        emptyfields.innerHTML = "all fields are required"
        errorInFields.appendChild(emptyfields)
    }
}

function required() {
    for(let property of properties){
        if (person[property] === '') {
            return false
        }else if(!document.getElementById('female').checked && !document.getElementById('male').checked ){
            return false
        }
        else if(person["hobby"] === "select"){
            return false
        }
    }
    return true
}

function uniqueId(){
    for(let i = 0; i<people.length; i++){
        if(document.querySelector('.id').value === people[i].id){
            emptyfields.innerHTML = "already registered"
            errorInFields.appendChild(emptyfields)
        }else{
            emptyfields.innerHTML = ""
        }
    }
    return emptyfields.innerHTML;
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

    // function createEditButton(){
    // const button = document.createElement('button')
    //     button.onclick = "edit(" + tr + ")"
    //     return button
    // }

    // function edit(tr){
    //     tr = createTr(obj);
    //     tr.contentEditable = true;
    // }

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
            table.appendChild(tr)
        }
        return table
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