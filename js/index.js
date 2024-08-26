document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('conversionForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const km = parseFloat(document.getElementById('kmInput').value);
        const m = parseFloat(document.getElementById('mInput').value);
        const ft = parseFloat(document.getElementById('ftInput').value);
        const yd = parseFloat(document.getElementById('ydInput').value);

        if (isNaN(km) || km < 0) {
            document.getElementById('kmResultado').textContent = 'Introduce un valor para convertir kilómetros a metros';
        } else {
            document.getElementById('kmResultado').textContent = `${km} kilómetros son ${km * 1000} metros`;
        }

        if (isNaN(m) || m < 0) {
            document.getElementById('mResultado').textContent = 'Introduce un valor para convertir metros a centímetros';
        } else {
            document.getElementById('mResultado').textContent = `${m} metros son ${m * 100} centímetros`;
        }

        if (isNaN(ft) || ft < 0) {
            document.getElementById('ftResultado').textContent = 'Introduce un valor para convertir pies a pulgadas';
        } else {
            document.getElementById('ftResultado').textContent = `${ft} pies son ${ft * 12} pulgadas`;
        }

        if (isNaN(yd) || yd < 0) {
            document.getElementById('ydResultado').textContent = 'Introduce un valor para convertir yardas a pulgadas';
        } else {
            document.getElementById('ydResultado').textContent = `${yd} yardas son ${yd * 36} pulgadas`;
        }
    });
});
