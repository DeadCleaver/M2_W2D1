//ESERCIZI SUGLI IF: 

/* if (unknownNumb % 2 === 0) {
console.log(unknownNumb + " è pari!");
} else {console.log(unknownNumb + " è dispari!");
 }
console.log("Ho finito di valutare il condizionale!");
 */

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let myNum1 = 10;
let myNum2 = 20;
if (myNum1 > myNum2) {
  console.log(myNum1 + " è il più grande");
} else if (myNum2 > myNum1) {
  console.log(myNum2 + " è il più grande");
} else {
  console.log(myNum1 + " è uguale a " + myNum2);
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 18;
if (num < 5){
  console.log ("Tiny");
} else if ((num >= 5) && (num < 10)) {
  console.log ("Small");
} else if ((num >= 10) && (num < 15)) {
  console.log ("Medium");
} else if ((num >= 15) && (num < 20)) {
  console.log ("Large");
} else if (num >= 20){
  console.log ("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let token = 0; token < 11; token++) {
  if ((token === 3) || (token === 8)) {
    continue;
  }
  console.log(token);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let item = 0; item < 16; item++) {
  if ((item % 2) === 0) {
    console.log(item + " è pari");
  } else {
    console.log(item + " è dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let int1 = 8;
let int2 = 2;
if (int1 === 8) {
  console.log("Il primo numero è uguale a " + int1);
} else if (int2 === 8) {
  console.log("il secondo numero è uguale a " + int2);
} else if ((int2-int1) === 8 || (int1-int2) === 8) {
  console.log("la somma o sottrazione tra i due numeri è uguale a 8");
} else {
  console.log("condizione non verificata");
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let shopCart = 30;
let totalCart = shopCart;
if (shopCart < 51) {
  totalCart = (shopCart +10);
} else {
  totalCart = shopCart;
}
console.log(totalCart);


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let shopCart = 40;
let totalCart = shopCart;
let discount = true;
if (discount) {
  shopCart = ((shopCart) * 0.8);
}
if (shopCart < 51) {
  totalCart = (shopCart +10);
} else {
  totalCart = shopCart;
}
if (totalCart)
console.log(totalCart);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SOLUZIONE 1
 */for (let counter = 1; counter < 101; counter++) {
  console.log(counter);
  if (((counter % 3) === 0) && ((counter % 5) === 0)) {
    console.log("FizzBuzz");
  } else if ((counter % 3) === 0) {
    console.log("Fizz");
  } else if ((counter % 5) === 0) {
    console.log("Buzz");
    }  
}

/* SOLUZIONE 2
 */
for (let counter = 1; counter < 101; counter++) {
  if (((counter % 3)===0) || ((counter % 5) === 0)) {
    if (((counter % 3) === 0) && ((counter % 5) !== 0)) {
      console.log("Fizz");
    } else if (((counter % 3) !== 0) && ((counter % 5) === 0)) {
      console.log("Buzz");
    } else if (((counter % 3) === 0) && ((counter % 5) === 0)) {
      console.log("FizzBuzz");
    }
  } else {
    console.log(counter);
  }
}