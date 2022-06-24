const container = document.getElementById('container');

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

// cearch element by id
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
        } else if (i % 10 < 0 ){
            groupOfTen.push(res.slice(i, i + 10))
        }
    }
    console.log(groupOfTen);
}
)
printGropuOfTen()
