document.addEventListener('DOMContentLoaded', function () {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const hexCodeDisplay = document.getElementById('hexCode');
    const manualRgbInput = document.getElementById('manualRgb');

    function updateColor() {
        const color = colorPicker.value;

        // Extraemos los componentes RGB del color seleccionado
        const [red, green, blue] = hexToRgb(color);

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        const hexColor = rgbToHex(red, green, blue);

        colorDisplay.style.backgroundColor = rgbColor;
        hexCodeDisplay.textContent = hexColor;
    }

    function hexToRgb(hex) {
        // Convertimos el valor hexadecimal a componentes RGB
        const bigint = parseInt(hex.slice(1), 16);
        const red = (bigint >> 16) & 255;
        const green = (bigint >> 8) & 255;
        const blue = bigint & 255;
        return [red, green, blue];
    }

    function rgbToHex(r, g, b) {
        // Convertimos componentes RGB a valor hexadecimal
        const toHex = (value) => {
            const hex = value.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);
    colorPicker.addEventListener('input', updateColor);

    // Initial update
    updateColor();

    manualRgbInput.addEventListener('input', updateColorFromInput);
});


