const container = document.getElementById("container");
container.style =
  "display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;";

//fetch

const fetching = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos");
};

const getNames = async () => {
  const response = await fetching();
  return (json = response.json());
};

//push to array

const nameList = [];

let arr = getNames().then((res) =>
  res.forEach((element) => {
    nameList.push(element);
  })
);

//inizializzo searchBar/form di ricerca

//container sezione ricerca
const searchContainer = document.createElement("div");
searchContainer.className = "searchContainer";
container.appendChild(searchContainer);
//container form
const FormContainer = document.createElement("form");
searchContainer.append(FormContainer);
//search input
const searchInput = document.createElement("input");
searchInput.type = "text";
FormContainer.append(searchInput);
searchInput.id = "searchInput";
//wrapper risultato
const resultContainer = document.createElement("div");
searchContainer.appendChild(resultContainer);
resultContainer.style =
  "display:flex;flex-direction:column;height:200px;width:200px;overflow-y:scroll;width:600px";
resultContainer.className = "resultContainer";
//checkbox completati
const checkCompleted = document.createElement("input");
checkCompleted.className = "checkCompleted";
checkCompleted.type = "checkbox";
FormContainer.appendChild(checkCompleted);

//select sort alfabetico crescente
const inputSelectSort = document.createElement("select");
inputSelectSort.id = "inputSelectSort";
FormContainer.appendChild(inputSelectSort);

//opzioni sort
const optionSortIncrese = document.createElement("option");
optionSortIncrese.innerText = "crescente";
optionSortIncrese.id = "optionSortIncrese";
inputSelectSort.appendChild(optionSortIncrese);

const optionSortDecrese = document.createElement("option");
optionSortDecrese.innerText = "decrescente";
optionSortDecrese.id = "optionSortDecrese";
inputSelectSort.appendChild(optionSortDecrese);

const optionSortIdIncrese = document.createElement("option");
optionSortIdIncrese.innerText = "ID crescente";
optionSortIdIncrese.id = "optionSortIncrese";
inputSelectSort.appendChild(optionSortIdIncrese);

const optionSortIdDecrese = document.createElement("option");
optionSortIdDecrese.innerText = "ID decrescente";
optionSortIdDecrese.id = "optionSortDecrese";
inputSelectSort.appendChild(optionSortIdDecrese);

//lista elementi
const list = (array) => {
  resultContainer.innerHTML = "";
    array.forEach((todo) => {
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
        toDoSortedIdProp,
        toDoSortedTitleProp,
        toDoSortedCompletedProp
      );
      resultContainer.appendChild(todoSortedEl);
    });
  };

//Per ogni todo-list, visualizzare l'id, il titolo e se è stata completata o meno;
//interagisco con il dom

// const table = document.createElement("table");
// table.style =
//   "display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; border: 3px solid black; width: fit-content";
// table.style.overflowY = "scroll";
// table.style.height = "400px";
// table.style.border = "3px solid black";
// const tableTr = document.createElement("tr");
// const tableTh = document.createElement("thead");
// const tableBody = document.createElement("tbody");
// const tableThID = document.createElement("th");
// tableThID.innerText = "ID";
// const tableThTitle = document.createElement("th");
// tableThTitle.innerText = "Title";
// const tableThDone = document.createElement("th");
// tableThDone.innerText = "Done";

// container.append(table);
// table.append(tableTr);
// table.appendChild(tableBody);
// tableTr.append(tableThID, tableThTitle, tableThDone);

// const naming = (divToName) => divToName.innerText();

const printTodos = () => {
  
    nameList.forEach((todo) => {
    const todoEl = document.createElement("div");
    todoEl.className = "todoEl";
    todoEl.style = "justify-content:space-between;width:100%";
    todoEl.style.display = "flex";
    const todoIdProp = document.createElement("span");
    todoIdProp.className = "todoIdProp";
    todoIdProp.innerText = `${todo.id}`;
    const todoTitleProp = document.createElement("span");
    todoTitleProp.className = "todoTitleProp";
    todoTitleProp.innerText = `${todo.title}'`;
    const todoCompletedProp = document.createElement("span");
    todoCompletedProp.className = "todoCompletedProp";
    todoCompletedProp.innerText = `${todo.completed}`;
    const span = document.querySelectorAll(".todoProp");
    span.forEach((element) => {
      element.style = "padding:10px";
    }
    );
    todoEl.append(
      todoIdProp,
      todoTitleProp,
      todoCompletedProp
    );
    resultContainer.append(todoEl);
  })

}

printTodos();

//2. Visualizzazione di tutte le todo-list presenti a gruppi di 10,
//con un sistema di impaginazione;

const printGropuOfTen = () =>
{
      console.log(nameList);

      for (const obj of nameList) {
            console.log(obj); 
      }
    }


// 3. Sistema di ricerca per titolo e descrizione da input testo, che permette di filtrare le todo-list;

// funzione per la ricerca

// const searchbyTitle = (event) => {
//   const text = event.target.value;
//   resultContainer.innerHTML = "";
//   list(nameList)
//   const todoSortedEl = document.querySelectorAll(".todoSortedEl");
//   todoSortedEl.forEach((element) => {
//     if (!element.innerText.includes(text)) {
//       element.remove()
//     } else {
//       element.style.display = "flex";
//     }
//   });
// };

// searchInput.addEventListener("keyup", searchbyTitle);

  const button = document.createElement("button");
  button.className = "button";
  button.innerText = "Next";
  button.style = "padding: 10px; border: 3px solid black;width: fit-content";
  searchContainer.appendChild(button);



 //funzione print in gruppi da 10 

  const impagination = () => {
  list(nameList);
  }

  button.onclick = impagination();

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
