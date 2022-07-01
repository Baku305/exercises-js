const fetching = () => fetch("https://jsonplaceholder.typicode.com/todos");
const getNames = async () => {
  const response = await fetching();
  return (json = response.json());
};

const nameList = [];

let arr = getNames().then((res) =>
  res.forEach((element) => nameList.push(element))
);

const container = document.getElementById("container");
const searchContainer = document.querySelector(".searchContainer");
const searchInput = document.querySelector(".searchInput");
const Wrapper = document.querySelector(".wrapper");
const resultContainer = document.querySelector(".resultContainer");
const selectCompleted = document.querySelector(".completedCheck");
const onlytrue = document.createElement("option");
onlytrue.innerText = "completed";
selectCompleted.appendChild(onlytrue);
const onlyFalse = document.createElement("option");
onlyFalse.innerText = "not completed";
selectCompleted.appendChild(onlyFalse);
const allSelected = document.createElement("option");
allSelected.innerText = "All";
selectCompleted.appendChild(allSelected);
const inputSelectSort = document.querySelector(".inputSelectSort");
const optionSortIncrese = document.createElement("option");
optionSortIncrese.innerText = "crescente";
inputSelectSort.appendChild(optionSortIncrese);
const optionSortDecrese = document.createElement("option");
optionSortDecrese.innerText = "decrescente";
inputSelectSort.appendChild(optionSortDecrese);
const optionSortIdIncrese = document.createElement("option");
optionSortIdIncrese.innerText = "ID crescente";
inputSelectSort.appendChild(optionSortIdIncrese);
const optionSortIdDecrese = document.createElement("option");
optionSortIdDecrese.innerText = "ID decrescente";
inputSelectSort.appendChild(optionSortIdDecrese);
const optionAll = document.querySelectorAll("option");
optionAll.forEach((element) => element.classList.add("optionSelect"));
const buttonContainer = document.querySelector(".buttonContainer");
const buttonPrev = document.createElement("button");
buttonPrev.className = "button";
buttonPrev.id = "buttonPrev";
buttonPrev.innerText = "Prev";
buttonPrev.role = "button";
buttonContainer.appendChild(buttonPrev);
const buttonNext = document.createElement("button");
buttonNext.className = "button";
buttonNext.id = "buttonNext";
buttonNext.innerText = "Next";
buttonNext.role = "button";
buttonContainer.appendChild(buttonNext);
counterContainer = document.createElement("div");

const Maker = (el) => {
  const todoSortedEl = document.createElement("div");
  todoSortedEl.classList.add("todoSortedEl");
  todoSortedEl.classList.add("hidden");
  const toDoSortedIdProp = document.createElement("span");
  toDoSortedIdProp.className = "todoIdProp";
  toDoSortedIdProp.innerText = `${el.id}`;
  const toDoSortedTitleProp = document.createElement("span");
  toDoSortedTitleProp.className = "todoTitleProp";
  toDoSortedTitleProp.innerText = `${el.title}'`;
  const toDoSortedCompletedProp = document.createElement("span");
  toDoSortedCompletedProp.className = "todoCompletedProp";
  toDoSortedCompletedProp.innerText = `${el.completed}`;
  const span = document.querySelectorAll(".todoProp");
  todoSortedEl.append(
    toDoSortedIdProp,
    toDoSortedTitleProp,
    toDoSortedCompletedProp
  );
  resultContainer.append(todoSortedEl);
};

const pageSize = 10;
let curPage = 1;

const printTodos = async () => {
  await arr;
  nameList.forEach((todo) => Maker(todo));
};

printTodos().then(() => {
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  todoSortedEl.forEach((element) => {
    element.classList.add("hidden");
    element.classList.remove("todo-visible");
  });
  toArray
    .filter((div, i) => {
      if (i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
        return true;
      }
    })
    .forEach((element) => {
      const index = toArray.indexOf(element);
      console.log(index);
      element.classList.remove("hidden");
      element.classList.add("todo-visible");
    });
});

const pagingCounter = async () => {
  await arr;

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);

  const numberContainer = document.createElement("div");

  counterContainer.classList.add("counterContainer");
  numberContainer.classList.add("numberContainer");

  for (let i = 1; i <= Math.ceil(toArray.length / pageSize); i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i;
    numberContainer.appendChild(number);
    if (i === curPage) {
      number.classList.add("active");
    }
  }

  counterContainer.appendChild(numberContainer);

  numberContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      curPage = e.target.innerText;
      impagination();
    }
  });
  resultContainer.append(counterContainer);
};


// funzione per la ricerca

const searchbyTitle = async (event) => {
  resultContainer.innerHTML = "";
  const text = event.target.value;
  nameList.forEach((todo) => {
    if (
      todo.title.toLowerCase().includes(text.toLowerCase()) ||
      text === ""
    ) {
      Maker(todo);
    }
  });
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  todoSortedEl.forEach((element) => {
    element.style.display = "none";
  });
  toArray
    .filter((div, i) => {
      if (i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
        return true;
      }
    })
    .forEach((element) => {
      const index = toArray.indexOf(element);
      console.log(index);
      element.style.display = "flex";
    });
  counterContainer.innerHTML = "";
  pagingCounter();
  buttonContainer.appendChild(buttonNext, buttonPrev);
  resultContainer.append(buttonContainer);
};

searchInput.addEventListener("keyup", searchbyTitle);

//funzione print in gruppi da 10 e bottoni

const previousPage = () => {
  if (curPage > 1) curPage--;
  impagination();
};

const nextPage = () => {
  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  const toArray = Array.from(todoSortedEl);
  if (curPage * pageSize < toArray.length) curPage++;
  impagination();
};

const impagination = () => {

  const todoSortedEl = document.querySelectorAll(".todoSortedEl");
  toArray = Array.from(todoSortedEl);
  toArray
    .filter((div, i) => {
      if (i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
        return true;
      } else {
        div.style.display = "none";
      }
    })
    .forEach((element, index) => {
      element.style.display = "flex";
      
    });

    const number = document.querySelectorAll(".number");
    const numberToArray = Array.from(number);

  numberToArray.forEach((element) => {
    if (element.innerText === curPage.toString()) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  })
};


buttonNext.addEventListener("click", nextPage, false);
buttonPrev.addEventListener("click", previousPage, false);



// funzione per il sort con checkbox

const checked = () => {
  resultContainer.innerHTML = "";

  nameList.filter((todoEl, i) => {
    if (selectCompleted.value === "completed") {
      const onlyTrueEl = todoEl.completed.toString() === "true";
      console.log(`falso ${onlyTrueEl}`);
      if (onlyTrueEl) {
        Maker(todoEl);
        buttonContainer.appendChild(buttonNext, buttonPrev);
        resultContainer.append(buttonContainer);
      }
    } else if (selectCompleted.value === "not completed") {
      const onlyFalseEl = todoEl.completed.toString() === "false";
      console.log(onlyFalseEl);
      if (onlyFalseEl) {
        Maker(todoEl);

        buttonContainer.appendChild(buttonNext, buttonPrev);
        resultContainer.append(buttonContainer);
      }
    } else if (selectCompleted.value === "All") {
      Maker(todoEl);

      buttonContainer.appendChild(buttonNext, buttonPrev);
      resultContainer.append(buttonContainer);
    }

    const todoSortedEl = document.querySelectorAll(".todoSortedEl");
    toArray = Array.from(todoSortedEl);
    todoSortedEl.forEach((element) => {
      element.style.display = "none";
    });
    toArray
      .filter((div, i) => {
        if (i >= (curPage - 1) * pageSize && i < curPage * pageSize) {
          return true;
        }
      })
      .forEach((element) => {
        const index = toArray.indexOf(element);
        console.log(index);
        element.style.display = "flex";
      });
  });
  counterContainer.innerHTML = "";
  pagingCounter();
  buttonContainer.appendChild(buttonNext, buttonPrev);
};

selectCompleted.addEventListener("change", checked);

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
        return (
          a.querySelector(".todoIdProp").innerText -
          b.querySelector(".todoIdProp").innerText
        );
      } else if (inputSelectSort.value === "ID decrescente") {
        return (
          b.querySelector(".todoIdProp").innerText -
          a.querySelector(".todoIdProp").innerText
        );
      }
    })
    .forEach((todoEl) => {
      resultContainer.appendChild(todoEl);
    });
  counterContainer.innerHTML = "";
  pagingCounter();
  impagination();
  uttonContainer.appendChild(buttonNext, buttonPrev);
};

inputSelectSort.addEventListener("change", sorter);

pagingCounter();
