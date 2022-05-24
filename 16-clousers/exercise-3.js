function createStore() {
  // ...
  const store = []
  
  return (newProduct) => {
    if (newProduct !== undefined) {
      store.push(newProduct);
    }
    return store;
  }
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const nike = { id: 4, name: 'Nike' };


console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
dressStore(nike)
console.log (dressStore());


console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(nike);
console.log (shoesStore());