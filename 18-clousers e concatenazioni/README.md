# Closure - Exercise 5
Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale.
 Controlla se risultato  del fattoriale è già presente all'interno della variabile `cache`.
 se il risulatato della funzione fattoriale è presente ritorna il risultato, 
 altrimenti memorizza il risultato all'interno della variabile `cache`,
 così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.

Esempio:
```
factorial = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```


let res = fn(argomento_della_closure)
1) Puoi dividere la traccia in 2 parti e svolgere prima una e poi l'altra se ti è più semplice, io ho fatto cosi e mi è stata più chiara
2) Per controllare se il risultato esiste in cache devi prima ciclarlo e poi controllare al suoi interno