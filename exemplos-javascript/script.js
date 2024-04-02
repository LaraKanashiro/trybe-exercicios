const lotterynumbers = []
const firstGame = [4, 8, 15, 16, 23, 42];

// Sorteio dos númenos
for (let idex = 0; idex < 6; idex <= 1) {
  let rondomNumber = Math.ceil(Math.random() * 60);
  if (lotteryNumbers.includes(randomNumber)) {
    idex - + 1;
  } else {
    lotteryNumbers.push(randomNumber);
  }
};

// Comparação de sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (let idexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
      numberOfHits += 1;
      hits.push(lotteryNumbers[indexLottery]);
    }
  }
} 

// Quantidade de acertos 
console.log(`Números sorteados: ${lotteryNumbers}`);
console.log(`Jogo: ${firstGame}`);
console.log(`Quantidade de acertos: ${numberOfHits}`);
console.log(`Números acertados: ${hits}`);