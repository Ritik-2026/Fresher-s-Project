let sciDisplay = document.getElementById('sciDisplay');

function appendToSciDisplay(value) {
    if (sciDisplay.value === '0' && value !== '.') {
        sciDisplay.value = value;
    } else {
        sciDisplay.value += value;
    }
}

function clearSciDisplay() {
    sciDisplay.value = '';
}

function clearSciEntry() {
    sciDisplay.value = '';
}

function deleteSciLast() {
    sciDisplay.value = sciDisplay.value.slice(0, -1);
}

function calculateSci() {
    try {
        let expression = sciDisplay.value.replace(/×/g, '*');
        let result = eval(expression);
        sciDisplay.value = parseFloat(result.toFixed(10));
    } catch (error) {
        sciDisplay.value = 'Error';
    }
}

function calculateSciPercentage() {
    try {
        let value = parseFloat(sciDisplay.value);
        sciDisplay.value = value / 100;
    } catch (error) {
        sciDisplay.value = 'Error';
    }
}

function calculateFunction(func, power = null) {
    try {
        let value = parseFloat(sciDisplay.value);
        let result;
        
        switch(func) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'exp':
                result = Math.exp(value);
                break;
            case 'power':
                result = Math.pow(value, power);
                break;
            case 'factorial':
                result = factorial(value);
                break;
            default:
                result = value;
        }
        
        sciDisplay.value = parseFloat(result.toFixed(10));
    } catch (error) {
        sciDisplay.value = 'Error';
    }
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
