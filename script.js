const pesoInput = document.getElementById('peso');
const estaturaInput = document.getElementById('estatura');
const imcValor = document.getElementById('imcValor');
const imcInterpretacion = document.getElementById('imcInterpretacion');

function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const estatura = parseFloat(estaturaInput.value);

    if (peso > 0 && estatura > 0) {
        // Fórmula: peso / (estatura * estatura)
        const imc = peso / (estatura * estatura);
        imcValor.textContent = imc.toFixed(2);

        let interpretacion = '';
        let color = '';

        if (imc < 18.5) {
            interpretacion = 'Bajo peso';
            color = '#d9534f';
        } else if (imc >= 18.5 && imc <= 24.9) {
            interpretacion = 'Peso saludable';
            color = '#5cb85c';
        } else if (imc >= 25.0 && imc <= 29.9) {
            interpretacion = 'Sobrepeso';
            color = '#f0ad4e';
        } else {
            interpretacion = 'Obesidad';
            color = '#d9534f';
        }

        imcInterpretacion.textContent = interpretacion;
        imcInterpretacion.style.color = color;
    } else {
        imcValor.textContent = '0.00';
        imcInterpretacion.textContent = 'Ingresa valores válidos';
        imcInterpretacion.style.color = '#333';
    }
}

// Eventos para calcular automáticamente cada vez que se escriba o modifique un campo
pesoInput.addEventListener('input', calcularIMC);
estaturaInput.addEventListener('input', calcularIMC);