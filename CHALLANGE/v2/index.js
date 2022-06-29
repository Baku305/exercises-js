const container = document.getElementById("container");

//fetch

const fetching = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos");
};
//prima funzione per il fetch
const getNames = async () => {
  const response = await fetching();
  return (json = response.json());
};

//push to array

const nameList = []; //arrai vuoto

let arr = getNames().then((res) => //promise che pusha tutto nela array
  res.forEach((element) => {
    nameList.push(element);
  })
);




//inizializzo searchBar/form di ricerca

//container sezione ricerca
const searchContainer = document.querySelector(".searchContainer");
//search input
const searchInput = document.querySelector(".searchInput");
//wrapper risultato
const resultContainer = document.querySelector(".resultContainer");


//checkbox completati
const selectCompleted = document.querySelector(".completedCheck");
//onlyTrue option
const onlytrue = document.createElement("option");
onlytrue.innerText = "Only completed";
selectCompleted.appendChild(onlytrue);

//onlyfalse
const onlyFalse = document.createElement("option");
onlyFalse.innerText = "Only not completed";
selectCompleted.appendChild(onlyFalse);



//select sort alfabetico crescente
const inputSelectSort = document.querySelector(".inputSelectSort");
//opzione sort alfabetico crescente
const optionSortIncrese = document.createElement("option");
optionSortIncrese.innerText = "crescente";
inputSelectSort.appendChild(optionSortIncrese);
//opzione sort alfabetico decrescente
const optionSortDecrese = document.createElement("option");
optionSortDecrese.innerText = "decrescente";
inputSelectSort.appendChild(optionSortDecrese);
//opzione sort id crescente
const optionSortIdIncrese = document.createElement("option");
optionSortIdIncrese.innerText = "ID crescente";
inputSelectSort.appendChild(optionSortIdIncrese);
//opzione sort id decrescente
const optionSortIdDecrese = document.createElement("option");
optionSortIdDecrese.innerText = "ID decrescente";
inputSelectSort.appendChild(optionSortIdDecrese);

//lista elementi 

const printTodos = async () => {
    await arr
    nameList.forEach((todo) => {
      const todoSortedEl = document.createElement("div");
      todoSortedEl.classList.add("todoSortedEl");
      todoSortedEl.classList.add("todo-visible");
      todoSortedEl.style = "justify-content:space-between;width:100%";
  
      const toDoSortedIdProp = document.createElement("span");
      toDoSortedIdProp.className = "todoIdProp";
      toDoSortedIdProp.innerText = `${todo.id}`;
  
      const toDoSortedTitleProp = document.createElement("span");
      toDoSortedTitleProp.className = "todoTitleProp";
      toDoSortedTitleProp.innerText = `${todo.title}'`;
  
      const toDoSortedCompletedProp = document.createElement("span");
      toDoSortedCompletedProp.className = "todoCompletedProp";
      toDoSortedCompletedProp.innerText = `${todo.completed}`;
  
      const span = document.querySelectorAll(".todoProp");
      span.forEach((element) => {
        element.style = "padding:10px";
      });

      todoSortedEl.append(
        toDoSortedIdProp,toDoSortedTitleProp,toDoSortedCompletedProp
      );
      resultContainer.append(todoSortedEl);
    });
    }

printTodos();


//2. Visualizzazione di tutte le todo-list presenti a gruppi di 10,
//con un sistema di impaginazione;


// funzione per la ricerca

 const searchbyTitle = (event) => {
  
  const text = event.target.value;
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);

  todoSortedEl.forEach((element) => {

    if (!element.innerText.includes(text)) {
      element.classList.add("hidden");
      element.classList.remove("todo-visible");
    } else {
      
      element.classList.remove("hidden");
      element.classList.add("todo-visible");
    }
  });
 };

 searchInput.addEventListener("keyup", searchbyTitle);

  const button = document.createElement("button");
  button.className = "button";
  button.innerText = "Next";
  button.style = "padding: 10px; border: 3px solid black;width: fit-content";
  searchContainer.appendChild(button);



 //funzione print in gruppi da 10 

  const impagination = () => {


    const todoSortedEl = document.querySelectorAll(".todoSortedEl");
    toArray = Array.from(todoSortedEl);

    const GroupOfTen = [];

    for (let i = 0; i < todoSortedEl.length; i++) {
      if (i % 10 === 0) {
        GroupOfTen.push(toArray.slice(i, i + 10));
      }

     const groupContainer = container.createElement('div')

     GroupOfTen.forEach(todo => {

      const todoId = groupContainer.createElement('span')
      const todoTitle = groupContainer.createElement('span')
      const todoCompleted = groupContainer.createElement('span')

      groupContainer.appendChild(todoId,todoTitle,todoCompleted)

     })

    }



  }

    button.addEventListener("click", impagination);
// funzione per il sort con checkbox

 const checked = () => {
   const todoEls = document.querySelectorAll(".todo-visible");
   toArray = Array.from(todoEls);
   toArray.filter((todoEl) => {
    if (selectCompleted.value === "Only completed") {
      const onlyTrueEl = todoEl.querySelector(".todoCompletedProp");
      console.log(onlyTrueEl);
      if (onlyTrueEl.innerText === "true") {

        todoEl.classList.remove("hidden");
        todoEl.style.display = 'flex'

      } else{

        todoEl.classList.add("hidden");
        todoEl.style.display = 'none'
      }}
    else if (selectCompleted.value ==="Only not completed") {
      const onlyFalseEl = todoEl.querySelector(".todoCompletedProp");
      console.log(onlyFalseEl);
      if(onlyFalseEl.innerText === "false"){
        todoEl.classList.remove("hidden");
        todoEl.style.display = 'flex'

      } else {
        todoEl.style.display = 'none'
        todoEl.classList.add("hidden");
      }
   }});
 };
onlytrue.addEventListener("click", checked);
onlyFalse.addEventListener("click", checked);



//sort titolo

//optionSortIncrese => crescente
//optionSortDecrese => decrescente
//inputSelectSort => select
//nameList

const sorter = () => {
    const todoEls = resultContainer.querySelectorAll(".todoSortedEl");
    const toArray = Array.from(todoEls);
    toArray.sort((a, b) => {
        const todoTitleA = a.querySelector(".todoTitleProp").innerText;
        const todoTitleB = b.querySelector(".todoTitleProp").innerText;
        if (inputSelectSort.value === "crescente") {
        return todoTitleA.localeCompare(todoTitleB);
        } else if (inputSelectSort.value === "decrescente") {
        return todoTitleB.localeCompare(todoTitleA);
        } else if (inputSelectSort.value === "ID crescente") {
        return a.querySelector(".todoIdProp").innerText.localeCompare(
            b.querySelector(".todoIdProp").innerText
        );
        } else if (inputSelectSort.value === "ID decrescente") {
        return b.querySelector(".todoIdProp").innerText.localeCompare(
            a.querySelector(".todoIdProp").innerText
        );
        }
    }).forEach((todoEl) => {
        resultContainer.appendChild(todoEl);
    })
};

optionSortIncrese.addEventListener('click',sorter)
optionSortDecrese.addEventListener('click',sorter)
optionSortIdIncrese.addEventListener('click',sorter)
optionSortIdDecrese.addEventListener('click',sorter)

