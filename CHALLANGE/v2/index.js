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

let arr = getNames().then(
  (
    res //promise che pusha tutto nela array
  ) =>
    res.forEach((element) => {
      nameList.push(element);
    })
);

//inizializzo searchBar/form di ricerca

//container sezione ricerca
const searchContainer = document.querySelector(".searchContainer");
//search input
const searchInput = document.querySelector(".searchInput");

//wrapper impaginazione
const Wrapper = document.querySelector(".wrapper");
//wrapper risultato
const resultContainer = document.querySelector(".resultContainer");

//checkbox completati
const selectCompleted = document.querySelector(".completedCheck");
//onlyTrue option
const onlytrue = document.createElement("option");
onlytrue.innerText = "completed";
selectCompleted.appendChild(onlytrue);

//onlyfalse
const onlyFalse = document.createElement("option");
onlyFalse.innerText = "not completed";
selectCompleted.appendChild(onlyFalse);

const allSelected = document.createElement("option");
allSelected.innerText = "All";
selectCompleted.appendChild(allSelected);

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

const optionAll = document.querySelectorAll("option");
optionAll.forEach((element) => {
  element.classList.add("optionSelect");
})
//container bottoni
const buttonContainer = document.querySelector(".buttonContainer");


//boottone prev
const buttonPrev = document.createElement("button");
buttonPrev.className = "button";
buttonPrev.id = "buttonPrev";
buttonPrev.innerText = "Prev";
buttonPrev.role="button"
buttonContainer.appendChild(buttonPrev);

//bottone next
const buttonNext = document.createElement("button");
buttonNext.className = "button";
buttonNext.id = "buttonNext";
buttonNext.innerText = "Next";
buttonNext.role="button"
buttonContainer.appendChild(buttonNext);

//lista elementi

const pageSize = 10;
let curPage = 1;


const printTodos = async () => {

  await arr;
  
    nameList.forEach((todo) => {
    const todoSortedEl = document.createElement("div");
    todoSortedEl.classList.add("todoSortedEl");
    todoSortedEl.classList.add("hidden");

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

    todoSortedEl.append(
      toDoSortedIdProp,
      toDoSortedTitleProp,
      toDoSortedCompletedProp
    );
    resultContainer.append(todoSortedEl)
    });

  
};

printTodos().then( () => {

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  todoSortedEl.forEach((element) => {
    element.classList.add("hidden");
    element.classList.remove("todo-visible");
  })
  toArray.filter((div, i) => {
    if(i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
    return true 
  } 
  }
  ).forEach((element) => {
    const index = toArray.indexOf(element);
    console.log(index);
    element.classList.remove("hidden");
    element.classList.add("todo-visible");
  })
})

// funzione per la ricerca

const searchbyTitle = async (event) => {
  resultContainer.innerHTML = "";
  const text = event.target.value;
    nameList.forEach( (todo) => {

    if (todo.title.toLowerCase().includes(text.toLowerCase()) || text === '' || todo.id.toString().includes(text)) {
    const todoSortedEl = document.createElement("div");
    todoSortedEl.classList.add("todoSortedEl");


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

    todoSortedEl.append(toDoSortedIdProp, toDoSortedTitleProp, toDoSortedCompletedProp);
    resultContainer.append(todoSortedEl)

        }
    })

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  todoSortedEl.forEach((element) => {
    element.style.display = "none";
  })
  toArray.filter((div, i) => {
    if(i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
    return true 
  } 
  }
  ).forEach((element) => {
    const index = toArray.indexOf(element);
    console.log(index);
    element.style.display = "flex";
  })
}

searchInput.addEventListener("keyup", searchbyTitle);


//funzione print in gruppi da 10 e bottoni


const previousPage = () => {
  if(curPage > 1) curPage--;
  impagination();
  ;
}

const nextPage =() => {
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  const toArray = Array.from(todoSortedEl);
  if((curPage * pageSize) < toArray.length) curPage++;
  impagination();
  ;
}


const impagination = () => {

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  toArray.filter((div, i) => {
    if(i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
    return true 
  } else {div.style.display = "none";}
  }
  ).forEach((element, index) => {
    element.style.display = "flex";
  })
}

buttonNext.addEventListener("click", nextPage, false );
buttonPrev.addEventListener("click", previousPage, false);
// funzione per il sort con checkbox

const checked = () => {

  resultContainer.innerHTML = "";

  nameList.filter((todoEl, i) => {

    if (selectCompleted.value === "completed") {
      const onlyTrueEl = todoEl.completed.toString() === "true";
      console.log(`falso ${onlyTrueEl}`);

      if (onlyTrueEl) {
        const todoSortedEl = document.createElement("div");
    todoSortedEl.classList.add("todoSortedEl");

    const toDoSortedIdProp = document.createElement("span");
    toDoSortedIdProp.className = "todoIdProp";
    toDoSortedIdProp.innerText = `${todoEl.id}`;

    const toDoSortedTitleProp = document.createElement("span");
    toDoSortedTitleProp.className = "todoTitleProp";
    toDoSortedTitleProp.innerText = `${todoEl.title}'`;

    const toDoSortedCompletedProp = document.createElement("span");
    toDoSortedCompletedProp.className = "todoCompletedProp";
    toDoSortedCompletedProp.innerText = `${todoEl.completed}`;

    const span = document.querySelectorAll(".todoProp");

    todoSortedEl.append(toDoSortedIdProp, toDoSortedTitleProp, toDoSortedCompletedProp);
    resultContainer.append(todoSortedEl)
      }
    } 

    else if (selectCompleted.value === "not completed") 
    {
      const onlyFalseEl = todoEl.completed.toString() === "false";
      console.log(onlyFalseEl);
      if (onlyFalseEl) {

    const todoSortedEl = document.createElement("div");
    todoSortedEl.classList.add("todoSortedEl");

    const toDoSortedIdProp = document.createElement("span");
    toDoSortedIdProp.className = "todoIdProp";
    toDoSortedIdProp.innerText = `${todoEl.id}`;

    const toDoSortedTitleProp = document.createElement("span");
    toDoSortedTitleProp.className = "todoTitleProp";
    toDoSortedTitleProp.innerText = `${todoEl.title}'`;

    const toDoSortedCompletedProp = document.createElement("span");
    toDoSortedCompletedProp.className = "todoCompletedProp";
    toDoSortedCompletedProp.innerText = `${todoEl.completed}`;


    todoSortedEl.append(toDoSortedIdProp, toDoSortedTitleProp, toDoSortedCompletedProp);
    resultContainer.append(todoSortedEl)
      }
    } 
    else if (selectCompleted.value === "All") {
      const todoSortedEl = document.createElement("div");
      todoSortedEl.classList.add("todoSortedEl");
  
      const toDoSortedIdProp = document.createElement("span");
      toDoSortedIdProp.className = "todoIdProp";
      toDoSortedIdProp.innerText = `${todoEl.id}`;
  
      const toDoSortedTitleProp = document.createElement("span");
      toDoSortedTitleProp.className = "todoTitleProp";
      toDoSortedTitleProp.innerText = `${todoEl.title}'`;
  
      const toDoSortedCompletedProp = document.createElement("span");
      toDoSortedCompletedProp.className = "todoCompletedProp";
      toDoSortedCompletedProp.innerText = `${todoEl.completed}`;
  
      todoSortedEl.append(toDoSortedIdProp, toDoSortedTitleProp, toDoSortedCompletedProp);
      resultContainer.append(todoSortedEl)
    }

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  todoSortedEl.forEach((element) => {
    element.style.display = "none";
  })
  toArray.filter((div, i) => {
    if(i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
    return true 
  } 
  }
  ).forEach((element) => {
    const index = toArray.indexOf(element);
    console.log(index);
    element.style.display = "flex";
  })
  });

};

onlytrue.addEventListener("click", checked);
onlyFalse.addEventListener("click", checked);
allSelected.addEventListener("click", checked);

//sort titolo

//optionSortIncrese => crescente
//optionSortDecrese => decrescente
//inputSelectSort => select
//nameList

const sorter = () => {
  const todoEls = resultContainer.querySelectorAll(".todoSortedEl");
  const toArray = Array.from(todoEls);
  toArray
    .sort((a, b) => {
      const todoTitleA = a.querySelector(".todoTitleProp").innerText;
      const todoTitleB = b.querySelector(".todoTitleProp").innerText;
      if (inputSelectSort.value === "crescente") {
        return todoTitleA.localeCompare(todoTitleB);
      } else if (inputSelectSort.value === "decrescente") {
        return todoTitleB.localeCompare(todoTitleA);
      } else if (inputSelectSort.value === "ID crescente") {
        return a.querySelector(".todoIdProp").innerText - b.querySelector(".todoIdProp").innerText;
      } else if (inputSelectSort.value === "ID decrescente") {
        return b.querySelector(".todoIdProp").innerText - a.querySelector(".todoIdProp").innerText;
      }
    })
    .forEach((todoEl) => {
      resultContainer.appendChild(todoEl);
    });
    impagination()
};

optionSortIncrese.addEventListener("click", sorter);
optionSortDecrese.addEventListener("click", sorter);
optionSortIdIncrese.addEventListener("click", sorter);
optionSortIdDecrese.addEventListener("click", sorter);
