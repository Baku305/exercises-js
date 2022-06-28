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
const checkCompleted = document.querySelector(".completedCheck");
//select sort alfabetico crescente
const inputSelectSort = document.querySelector(".inputSelectSort");
//opzione sort alfabetico crescente
const optionSortIncrese = document.createElement("option");
optionSortIncrese.innerText = "crescente";
optionSortIncrese.id = "optionSortIncrese";
inputSelectSort.appendChild(optionSortIncrese);
//opzione sort alfabetico decrescente
const optionSortDecrese = document.createElement("option");
optionSortDecrese.innerText = "decrescente";
optionSortDecrese.id = "optionSortDecrese";
inputSelectSort.appendChild(optionSortDecrese);
//opzione sort id crescente
const optionSortIdIncrese = document.createElement("option");
optionSortIdIncrese.innerText = "ID crescente";
optionSortIdIncrese.id = "optionSortIncrese";
inputSelectSort.appendChild(optionSortIdIncrese);
//opzione sort id decrescente
const optionSortIdDecrese = document.createElement("option");
optionSortIdDecrese.innerText = "ID decrescente";
optionSortIdDecrese.id = "optionSortDecrese";
inputSelectSort.appendChild(optionSortIdDecrese);

//lista elementi 

const printTodos = async () => {
    await arr
    nameList.forEach((todo) => {
      const todoSortedEl = document.createElement("div");
      todoSortedEl.className = "todoSortedEl";
      todoSortedEl.style = "justify-content:space-between;width:100%";
      todoSortedEl.style.display = "flex";
  
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
    // for (let i = 0; i < todoSortedEl.length; i++) {
    //   if (i % 10 === 0) {
    //     GroupOfTen.push(toArray.slice(i, i + 10));
    //   }} // primo tentativo incompleto praticamente mi crea un nuovo array
    }

printTodos();


//2. Visualizzazione di tutte le todo-list presenti a gruppi di 10,
//con un sistema di impaginazione;


// funzione per la ricerca

 const searchbyTitle = (event) => {
  const text = event.target.value;
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  todoSortedEl.forEach((element) => {
    if (!element.innerText.includes(text)) {
      element.remove()
    } else {
      element.style.display = "flex";
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
    console.log(GroupOfTen)


  }

    button.addEventListener("click", impagination);
// funzione per il sort con checkbox

//checkCompleted
//todoCompletedProp

 const checked = () => {
   const todoEls = document.querySelectorAll(".todoSortedEl");
   todoEls.forEach((todoEl) => {
     const todoCompletedprop = document.querySelectorAll(".todoCompletedProp");

     if (checkCompleted.checked) {
       todoCompletedprop.forEach((todoCompleted) => {
         if (todoCompleted.innerText === "true") {
           todoCompleted.parentElement.style.display = "flex";
         } else {
          todoCompleted.parentElement.style.display = "none";
         }
       });
     } else if (!checkCompleted.checked) {
       todoCompletedprop.forEach((todoCompleted) => {
         if (todoCompleted.innerText === "true") {
           todoCompleted.parentElement.style.display = "none";
         } else {
           todoCompleted.parentElement.style.display = "flex";
         }
       });
       todoEl.style.display = "none";
     }
   });
 };

 checkCompleted.addEventListener("change", checked);

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


inputSelectSort.addEventListener("change", sorter);
