const buttonSubmit = document.getElementById("calculate");

function calculate() {
  const kg = +document.getElementById("kg").value;
  const dose = document.getElementById("dose").value;
  const mlPerHour = document.getElementById("mlPerHour").value;
  const solutionQuantity = document.querySelector(
    'input[name="solution-quantity"]:checked'
  ).value;
  const lidoConcentration = document.querySelector(
    'input[name="lido-concentration"]:checked'
  ).value;

  if ((kg === "") | (kg < 0.1) | (kg === null)) {
    window.alert("Você digitou um peso inválido");
  } else if ((dose === "") | (dose < 0.02) | (dose === null) | (dose > 0.08)) {
    window.alert(
      "Você digitou uma dose inválida.\nDigite um valor entre 0.02 e 0.08 mg."
    );
  } else if ((mlPerHour === "") | (mlPerHour < 0.1) | (mlPerHour === null)) {
    window.alert(
      "Você digitou uma taxa de infusão inválida.\nDigite um valor mínimo de 0.1 ml/h."
    );
  } else {
    const mgPerHour = kg * dose * 60;
    const taxPercentage = mgPerHour / (lidoConcentration * 10);
    const solutionPercentage = (taxPercentage * 100) / mlPerHour;
    const lidoMl = (solutionQuantity * solutionPercentage) / 100;

    const mainContainer = document.querySelector(".container");
    const lidoMlLabel = document.getElementById("lidoMlLabel");
    const lidoMlResult = document.getElementById("lidoMlResult");
    lidoMlResult.value = `${lidoMl.toFixed(3).toString().replace(".", ",")} ml`;
    lidoMlLabel.style.display = "block";
    lidoMlResult.style.display = "block";
    mainContainer.style.height = "auto";
  }
}

buttonSubmit.addEventListener("click", calculate);
