function myFunction() {
  let nro1, nro2, total = 0;
  let operando = document.getElementById('selectOper').value;
  nro1 = document.getElementById('inputNumber1').value;
  nro2 = document.getElementById('inputNumber2').value;
  if(operando == 'suma') {
    total = parseInt(nro1) + parseInt(nro2);
  }
  if(operando == 'resta') {
    total = parseInt(nro1) - parseInt(nro2);
  }
  if(operando == 'multi') {
    total = parseInt(nro1) * parseInt(nro2);
  }
  document.getElementById('staticTotal').innerHTML = total;
}

function limpiarForm() {
  console.log(document.getElementById('selectOper').value);
  document.getElementById('my-form').reset();
  document.getElementById('staticTotal').innerHTML = "$";
}
document.getElementById('my-form').addEventListener('submit', myFunction);


