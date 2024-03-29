let diaper
let babySize = 67;

if (typeof babySize != 'number') {
    diaper = 'Valor invalido!'
}
if (babySize <= 4) {
    diaper = 'RN';
}
else if (babySize > 4 && babySize <= 6) {
    diaper = 'RN+';
}
else if (babySize > 6 && babySize <= 8) {
    diaper = 'P';
}
else if (babySize > 8 && babySize <= 10) {
    diaper = 'M';
}
else if (babySize > 10 && babySize <= 13) {
    diaper = 'G';
}
else if (babySize > 13 && babySize <= 15) {
    diaper = 'XG';
}
else if (babySize > 15) {
     diaper = 'XXG'
}


console.log('O tamaho da fralda é: ' + diaper);

