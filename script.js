const Scelta = prompt('Scrivere pari o dispari per la scelta');
console.log('Scelta', Scelta, typeof Scelta);

const Numeri = prompt('Scegliere un numero da 1 a 5');
console.log('Numeri', Scelta, typeof Scelta);

const NumeriPC = generateRandomNumber(1, 5);
console.log('NumeriPC', NumeriPC, typeof NumeriPC);

const Somma = Numeri + NumeriPC;
console.log('Somma', Somma, typeof Somma);

const even = isEven(Somma);
console.log('even', even, typeof even);

if (even && Scelta == 'p') {
    alert ('Hai vinto!');
}
else if (!even && Scelta == 'd') {
    alert('Hai vinto!');
}
else {
    alert ('Hai perso!');
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}