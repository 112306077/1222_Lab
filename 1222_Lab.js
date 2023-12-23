let diceValues = [];
const numberOfDice = 12;

function start() {
  const button = document.getElementById("rollButton");
  button.addEventListener("click", rollDice, false);
}

function rollDice() {
  diceValues = [];
  const diceContainer = document.getElementById("diceContainer");
  diceContainer.innerHTML = "";

  const probabilities = new Array(7).fill(0);

  for (let i = 0; i < numberOfDice; i++) {
    const dieValue = Math.floor(1 + Math.random() * 6);
    diceValues.push(dieValue);
    probabilities[dieValue]++;
    const dieImg = document.createElement("img");
    dieImg.setAttribute("src", "die" + dieValue + ".png");
    dieImg.setAttribute("alt", "die image with " + dieValue + " spot(s)");
    diceContainer.appendChild(dieImg);
  }

  updateProbabilityTable(probabilities);
}

function updateProbabilityTable(probabilities) {
  const probabilityTable = document.getElementById("probabilityTable");
  
  while (probabilityTable.rows.length > 1) {
    probabilityTable.deleteRow(1);
  }

  for (let i = 1; i <= 6; i++) {
    const row = probabilityTable.insertRow();
    const cellFace = row.insertCell(0);
    const cellProbability = row.insertCell(1);

    cellFace.textContent = i;
    const probability = ((probabilities[i] / numberOfDice) * 100).toFixed(2) + "%";
    cellProbability.textContent = probability;
  }
}

window.addEventListener("load", start, false);