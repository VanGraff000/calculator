//Agrega un valor a la pantalla para calcular
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

//Limpia la pantalla de calculo
function out() {
    document.getElementById('pantalla').value = " ";
}

//Calcula los valores en pantalla
function calc() {
    const valorPantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}