const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
const thirdInput = document.querySelector("#input3");
const profitDisplay = document.querySelector("#profit");
const lossDisplay = document.querySelector("#loss");
const sameDisplay = document.querySelector("#same");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const bPrice = firstInput.value;
  let quantity = secondInput.value;
  const sPrice = thirdInput.value;
  if (!quantity) {
    quantity = 1;
  }
  if (bPrice && sPrice) {
    if (sPrice<=0 || bPrice<=0 || quantity<=0) {
      sameDisplay.innerHTML = `Enter valid inputs 😐 `;
      profitDisplay.innerHTML = ``;
      lossDisplay.innerHTML = ``;
      document.body.style.backgroundColor = "#eff5fb";
    }
    else if (bPrice > sPrice) {
      const values = lossCalculator(bPrice, sPrice, quantity);
      lossDisplay.innerHTML = `You have incured loss of ${values[1]}% and total loss of amount ${values[2]} 😞`;
      profitDisplay.innerHTML = ``;
      sameDisplay.innerHTML = ``;
      document.body.style.backgroundColor = "#feecf0";
    } else if (sPrice > bPrice) {
      const values = profitCalculator(bPrice, sPrice, quantity);
      profitDisplay.innerHTML = `You have gained profit of ${values[1]}% and total profit of amount ${values[2]} 😁`;
      lossDisplay.innerHTML = ``;
      sameDisplay.innerHTML = ``;
      document.body.style.backgroundColor = "#ebfffc";
    } else if (sPrice === bPrice) {
      sameDisplay.innerHTML = `The price of stock is same so neither Profit nor Loss 😐 `;
      profitDisplay.innerHTML = ``;
      lossDisplay.innerHTML = ``;
      document.body.style.backgroundColor = "#eff5fb";
    }
    
  }
  else{
      alert('Complete the inputs')
  }
});

function profitCalculator(bp, sp, q) {
  const profit = sp - bp;
  const profitPercent = (profit / bp) * 100;
  const totalProfit = profit * q;

  return [profit, profitPercent.toFixed(2), totalProfit];
}

function lossCalculator(bp, sp, q) {
  const loss = bp - sp;
  const lossPercent = (loss / bp) * 100;
  const totalLoss = loss * q;

  return [loss, lossPercent.toFixed(2), totalLoss];
}
