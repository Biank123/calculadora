function calcular(operacion) {
    // Obtener los valores de los dos números introducidos
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Debe ingresar dos números válidos.";
        return;
    }

    switch (operacion) {
        case 'suma':
            result.textContent = `Resultado: ${num1 + num2}`;
            break;
        case 'resta':
            result.textContent = `Resultado: ${num1 - num2}`;
            break;
        case 'multiplicacion':
            result.textContent = `Resultado: ${num1 * num2}`;
            break;
        case 'division':
            if (num2 === 0) {
                result.textContent = "No se puede dividir entre cero.";
            } else {
                result.textContent = `Resultado: ${num1 / num2}`;
            }
            break;
        case 'potencia':
            result.textContent = `Resultado: ${Math.pow(num1, num2)}`;
            break;
        case 'modulo':
            if (num2 === 0) {
                result.textContent = "No se puede dividir entre cero.";
            } else {
                result.textContent = `Resultado: ${num1 % num2}`;
            }
            break;
        case 'raiz':
            result.textContent = `Raíz cuadrada de ${num1}: ${Math.sqrt(num1)} y de ${num2}: ${Math.sqrt(num2)}`;
            break;
        case 'seno':
            let unidad = prompt("¿Está en grados o radianes?").toLowerCase();
            if (unidad === 'gr') {
                result.textContent = `Seno de ${num1}°: ${Math.sin(num1 * Math.PI / 180)} y de ${num2}°: ${Math.sin(num2 * Math.PI / 180)}`;
            } else if (unidad === 'rad') {
                result.textContent = `Seno de ${num1}: ${Math.sin(num1)} y de ${num2}: ${Math.sin(num2)}`;
            } else {
                result.textContent = "Unidad no válida. Introduzca 'gr' para grados o 'rad' para radianes.";
            }
            break;
        case 'coseno':
            let unidadCos = prompt("¿Está en grados o radianes?").toLowerCase();
            if (unidadCos === 'gr') {
                result.textContent = `Coseno de ${num1}°: ${Math.cos(num1 * Math.PI / 180)} y de ${num2}°: ${Math.cos(num2 * Math.PI / 180)}`;
            } else if (unidadCos === 'rad') {
                result.textContent = `Coseno de ${num1}: ${Math.cos(num1)} y de ${num2}: ${Math.cos(num2)}`;
            } else {
                result.textContent = "Unidad no válida. Introduzca 'gr' para grados o 'rad' para radianes.";
            }
            break;
        default:
            result.textContent = "Operación no reconocida.";
            break;
    }
}

function resetear() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}
