function sumar (operando1, operando2) {
    return operando1 + operando2;
  }

  function restar (operando1, operando2) {
    return operando1 - operando2;
  }

  function multiplicar (operando1, operando2) {
    return operando1 * operando2;
  }

  function dividir (operando1, operando2) {
    return operando1 / operando2;
  }

const operando1 = document.querySelector(".operando input");
const operando2 = document.querySelector(".operando2 input");
const resultado = document.querySelector(".resultado p");
const errorMsg = document.querySelector('.error p')

const calcular = (element) => {

  errorMsg.style.display = 'none'
  const operando1Value = Number(operando1.value);
  const operando2Value = Number(operando2.value);

  switch (element.id) {
    case "btnSumar":
     resultado.textContent = `Resultado: ${sumar(operando1Value, operando2Value)}`;
      break;
    case "btnRestar":
      resultado.textContent = restar(operando1Value, operando2Value);
      break;
    case "btnMultiplicar":
      resultado.textContent = multiplicar(operando1Value, operando2Value);
      break;
    case "btnDividir":
      if(operando2Value === 0) {

        errorMsg.style.display = 'block'
      }
      else {
        resultado.textContent = dividir(operando1Value, operando2Value);
      }
      break;
  }
}
/*
operador.forEach((op => {
  op.addEventListener("click", calcular(op))
}))*/

