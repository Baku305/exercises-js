const container = document.getElementById('container');
container.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;'

//fetch 

const fetching = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
 }

 const getNames = async() => {
    const response = await fetching()
    return json = response.json()
 }

//push to array

 const nameList = []

let arr = getNames().then(res => res.forEach(element => {
    nameList.push(element)
}))
console.log(nameList);

// search element by id
const getElementById = (id) => getNames()
.then(res => res.find(element => {
    if (element.id === id) {
        console.log(element); 
    }
}))

getElementById(10)


//Per ogni todo-list, visualizzare l'id, il titolo e se è stata completata o meno;
//interagisco con il dom

const table = document.createElement('table')
table.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; border: 3px solid black; width: fit-content'
table.style.overflowY = 'scroll'
table.style.height = '400px'
table.style.border = '3px solid black'
const tableTr = document.createElement('tr')
const tableTh = document.createElement('thead')
const tableBody = document.createElement('tbody')
const tableThID = document.createElement('th')
tableThID.innerText = 'ID'
const tableThTitle = document.createElement('th')
tableThTitle.innerText = 'Title'
const tableThDone = document.createElement('th')
tableThDone.innerText = 'Done'


container.append(table);
table.append(tableTr)
table.appendChild(tableBody)
tableTr.append(tableThID,tableThTitle,tableThDone)

const naming = divToName => divToName.innerText()

const printTodos = () => getNames().then(res => res.forEach(element => {

    let tdID = document.createElement('td')
    tdID.innerText = `${element.id}`

    let tdName = document.createElement('td')
    tdName.innerText = `${element.title}`

    let tdCompleted = document.createElement('td')
    tdCompleted.innerText = `${element.completed}`

    const tr = document.createElement('tr')
    tableBody.appendChild(tr)
    tr.append(tdID,tdName,tdCompleted)
    
}))

printTodos()


//2. Visualizzazione di tutte le todo-list presenti a gruppi di 10, 
//con un sistema di impaginazione;


const printGropuOfTen = () => getNames()
.then(res => {
    let groupOfTen = []
    for (let i = 0; i < res.length; i++) {
        if (i % 10 === 0) {
            groupOfTen.push(res.slice(i, i + 10))
        }
    }
    return groupOfTen
}).then (res => {
    let externalContainer = document.createElement('div')
    res.forEach(element => {
    let groupContainer = document.createElement('div')
    groupContainer.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; border: 3px solid black; width: fit-content'
    element.forEach(element => {
        let tdID = document.createElement('td')
        tdID.innerText = `${element.id}`
        tdID.style.padding = '10px'

        let tdTitle = document.createElement('td')
        tdTitle.innerText = `${element.title}`
        tdTitle.style.padding = '10px'

        let tdCompleted = document.createElement('td')
        tdCompleted.innerText = `${element.completed}`
        tdCompleted.style.padding = '10px'

        const tr = document.createElement('tr')
        groupContainer.appendChild(tr)
        tr.append(tdID,tdTitle,tdCompleted)
        externalContainer.appendChild(groupContainer)
    })

    container.appendChild(externalContainer)
    externalContainer.style = 'display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; width: fit-content'
    externalContainer.style.gap = '20px'

})})

printGropuOfTen()


// 3. Sistema di ricerca per titolo e descrizione da input testo, che permette di filtrare le todo-list;

//inizializzo searchBar/form di ricerca 

    //container sezione ricerca
    const searchContainer = document.createElement('div')
    searchContainer.className = 'searchContainer'
    container.appendChild(searchContainer)
    //container form
    const FormContainer = document.createElement('form')
    searchContainer.append(FormContainer)
    //search input
    const searchInput = document.createElement('input')
    searchInput.type = 'text'
    FormContainer.append(searchInput)
    searchInput.id = 'searchInput'
    //wrapper risultato
    const resultContainer = document.createElement('div')
    searchContainer.appendChild(resultContainer)
    resultContainer.style = 'display:flex;flex-direction:column;height:200px;width:200px;overflow-y:scroll;width:600px'
    resultContainer.className = 'resultContainer'
    //checkbox completati
    const checkCompleted = document.createElement('input')
    checkCompleted.className = 'checkCompleted'
    checkCompleted.type = 'checkbox'
    FormContainer.appendChild(checkCompleted)
    //select sort alfabetico crescente
    const inputSelectSort = document.createElement('select')
    inputSelectSort.id = 'inputSelectSort'
    FormContainer.appendChild(inputSelectSort)
    
    //opzioni sort
    const optionSortIncrese = document.createElement('option')
    optionSortIncrese.innerText = 'crescente'
    inputSelectSort.appendChild(optionSortIncrese)

    const optionSortDecrese = document.createElement('option')
    optionSortDecrese.innerText = 'decrescente'
    inputSelectSort.appendChild(optionSortDecrese)


//funzione per creare la lista 

 const initList = () => 
    getNames()
 .then ( nameList => {

     nameList.forEach(todo => {
        const todoEl = document.createElement('div') 
        todoEl.className = 'todoEl'
        todoEl.style = 'justify-content:space-between;width:100%'
        todoEl.style.display = 'none'

        const toDoIdProp = document.createElement('span')
        toDoIdProp.className = 'todoIdProp'
        toDoIdProp.innerText = `${todo.id}`


        const toDoTitleProp = document.createElement('span')
        toDoTitleProp.className = 'todoTitleProp'
        toDoTitleProp.innerText = `${todo.title}'`

        const toDoCompletedProp = document.createElement('span')
        toDoCompletedProp.className = 'todoCompletedProp'
        toDoCompletedProp.innerText = `${todo.completed}`

        const span = document.querySelectorAll('.todoProp')
        span.forEach(element => {
            element.style = 'padding:10px'
        })
        todoEl.append(toDoIdProp, toDoTitleProp, toDoCompletedProp)
        resultContainer.appendChild(todoEl);
            
    })
 })

 initList()

 // funzione per la ricerca 


 const searchbyTitle = (event) => {
    const text = event.target.value
    const todoEls = document.querySelectorAll('.todoEl');
    todoEls.forEach(todoEl => {
        if (todoEl.innerText.includes(text) && text !== '') {
            todoEl.style.display = 'flex'
        }else {
            todoEl.style.display = 'none'
        }
    })
 }
 

searchInput.addEventListener('keyup', searchbyTitle)

// funzione per il sort con checkbox

//checkCompleted
//todoCompletedProp

const checked = () => {

    const todoEls = document.querySelectorAll('.todoEl');
    todoEls.forEach(todoEl => {
        const todoCompletedprop = document.querySelectorAll('.todoCompletedProp')

        if (checkCompleted.checked) {
            todoCompletedprop.forEach(todoCompleted => {
                if (todoCompleted.innerText === 'true') {
                    todoCompleted.parentElement.style.display = 'flex'
                }else {
                    todoCompleted.parentElement.style.display = 'none'
                }
            })

        } else if (!checkCompleted.checked){
            todoCompletedprop.forEach(todoCompleted => {
                if (todoCompleted.innerText === 'true') {
                    todoCompleted.parentElement.style.display = 'none'
                }else {
                    todoCompleted.parentElement.style.display = 'flex'
                }
            })
            todoEl.style.display = 'none'
        }
        
    })

}

checkCompleted.addEventListener('change', checked)
