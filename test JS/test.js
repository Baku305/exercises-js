/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/

//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
  {
    id: 324234,
    category: 0,
    quantity: 1,
    title: "Margherita",
    description: "Pomodoro, mozzarella e basilico",
    ingredients: ["pomodoro", "mozzarella", "basilico"],
    price: 6.5,
  },
  {
    id: 098394,
    category: 0,
    quantity: 1,
    title: "Calzone Classico",
    description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",
    ingredients: ["pomodoro", "mozzarella", "prosciutto cotto"],
    price: 7.0,
  },
  {
    id: 432432,
    category: 4,
    quantity: 1,
    title: "Coca Cola Zero",
    description: "33CL",
    price: 3.0,
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: "Salamino",
    description: "Pomodoro, mozzarella e salamino piccante",
    ingredients: ["pomodoro", "mozzarella", "salamino"],
    price: 7.5,
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: "Salamino",
    description: "Mozzarella, salsiccia, patate al forno",
    ingredients: ["mozzarella", "salsiccia", "patate al forno"],
    price: 7.5,
  },
  {
    id: 333445,
    category: 4,
    quantity: 1,
    title: "Acqua Naturale",
    description: "1L",
    price: 2,
  },
  {
    id: 656765,
    category: 3,
    quantity: 3,
    title: "Cheesecake Cioccolato",
    description: "Dolce a base di formaggio fresco e topping al cioccolato",
    price: 5,
  },
];

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
  {
    id: 0,
    name: "pizze",
  },
  {
    id: 1,
    name: "panini",
  },
  {
    id: 2,
    name: "sushi",
  },
  {
    id: 3,
    name: "dessert",
  },
  {
    id: 4,
    name: "bevande",
  },
];

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/

/*let getTotalAmount = () => {
        let sum = 0
        productsInCart.forEach(product => {
            sum = (product.price * product.quantity) + sum  
        })
        return sum
    }
    */
console.log("----------------TOTAL AMOUNT----------------");
let getTotalAmount = () => {
  return productsInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
};

console.log(getTotalAmount());
/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
    */

console.log('----------------CATEGORY CODE----------------');
let getCategoryCode = (categoryName) => {
  return categories.find((category) => categoryName === category.name)?.id;
};
console.log(getCategoryCode("sushi"));
/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
console.log('----------------CATEGORY COUNT----------------');
let getCategoryCount = (categoryName) => {
  return productsInCart.filter(
    (product) => product.category === getCategoryCode(categoryName)
  ).length;
};
console.log(getCategoryCount("pizze"));
/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/
console.log('----------------REMOVE FROM CART----------------');
let removeFromCart = (id) => {
  let product = productsInCart.find((product) => product.id === id);
  if (product.quantity > 1) {
    product.quantity--;
  }else{
    productsInCart.splice(productsInCart.indexOf(product), 1);
  }

};
console.log("-------------------INITIAL CART-------------------");
console.log(productsInCart);
console.log("-------------------UPDATED CART-------------------");
removeFromCart(324234);
console.log(productsInCart);

//rimuovo un prodotto dall'array con un unico elemento
console.log(
  "-------------------REMOVE LAST ELEMENT-------------------"
);
removeFromCart(656765);
console.log(productsInCart);

/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

let printcart = () => {
  let sum = 0;
  categories.forEach((category) => {
    if (getCategoryCount(category.name) > 0) {
      console.log(`*** ${category.name} ***`);
      productsInCart
        .filter((product) => product.category === category.id)
        .forEach((product) => {
          console.log(
            `- ${product.quantity} x ${product.title} (${product.description}) | ${product.price}€`
          );
          sum += product.price * product.quantity;
        });
    }
  });
  console.log(`*** TOTALE ***`);
  console.log(`${sum}€`);
};

console.log("-------------------STAMPA CARRELLO-------------------");
printcart();
/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------
*/

const getPizzeBianche = () => {
  return productsInCart.filter(
    (product) =>
      product.category === 0 &&
      product.ingredients.includes("pomodoro") === false
  );
};

console.log("-------------------PIZZE BIANCHE-------------------");
console.log(getPizzeBianche());
