// Length Conversion
function convertLength() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const from = document.getElementById('fromLength').value;
    const to = document.getElementById('toLength').value;
    
    if (isNaN(value)) {
        document.getElementById('lengthResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to meters first
    const toMeters = {
        'mm': 0.001,
        'cm': 0.01,
        'm': 1,
        'km': 1000,
        'in': 0.0254,
        'ft': 0.3048,
        'yd': 0.9144,
        'mi': 1609.34
    };
    
    const meters = value * toMeters[from];
    const result = meters / toMeters[to];
    
    document.getElementById('lengthResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Mass Conversion
function convertMass() {
    const value = parseFloat(document.getElementById('massValue').value);
    const from = document.getElementById('fromMass').value;
    const to = document.getElementById('toMass').value;
    
    if (isNaN(value)) {
        document.getElementById('massResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to grams first
    const toGrams = {
        'mg': 0.001,
        'g': 1,
        'kg': 1000,
        'oz': 28.3495,
        'lb': 453.592,
        'ton': 1000000,
        'stone': 6350.29
    };
    
    const grams = value * toGrams[from];
    const result = grams / toGrams[to];
    
    document.getElementById('massResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Temperature Conversion
function convertTemperature() {
    const value = parseFloat(document.getElementById('tempValue').value);
    const from = document.getElementById('fromTemp').value;
    const to = document.getElementById('toTemp').value;
    
    if (isNaN(value)) {
        document.getElementById('tempResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    let celsius;
    
    // Convert to Celsius first
    switch(from) {
        case 'celsius':
            celsius = value;
            break;
        case 'fahrenheit':
            celsius = (value - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = value - 273.15;
            break;
        case 'rankine':
            celsius = (value - 491.67) * 5/9;
            break;
    }
    
    let result;
    
    // Convert from Celsius to target
    switch(to) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = celsius * 9/5 + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
        case 'rankine':
            result = celsius * 9/5 + 491.67;
            break;
    }
    
    document.getElementById('tempResult').innerHTML = 
        `${value}° ${from.charAt(0).toUpperCase()} = ${result.toFixed(2)}° ${to.charAt(0).toUpperCase()}`;
}

// BMI Calculator
function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
    
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('bmiResult').innerHTML = 'Please enter valid numbers';
        return;
    }
    
    // Convert weight to kg
    if (weightUnit === 'lb') {
        weight = weight * 0.453592;
    }
    
    // Convert height to meters
    switch(heightUnit) {
        case 'cm':
            height = height / 100;
            break;
        case 'ft':
            height = height * 0.3048;
            break;
        case 'in':
            height = height * 0.0254;
            break;
    }
    
    const bmi = weight / (height * height);
    
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    document.getElementById('bmiResult').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').innerHTML = `Category: ${category}`;
}
// Time Conversion
function convertTime() {
    const value = parseFloat(document.getElementById('timeValue').value);
    const from = document.getElementById('fromTime').value;
    const to = document.getElementById('toTime').value;
    
    if (isNaN(value)) {
        document.getElementById('timeResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to seconds first
    const toSeconds = {
        'ms': 0.001,
        's': 1,
        'min': 60,
        'hr': 3600,
        'day': 86400,
        'week': 604800,
        'month': 2629746, // Average month
        'year': 31556952  // Average year
    };
    
    const seconds = value * toSeconds[from];
    const result = seconds / toSeconds[to];
    
    document.getElementById('timeResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Speed Conversion
function convertSpeed() {
    const value = parseFloat(document.getElementById('speedValue').value);
    const from = document.getElementById('fromSpeed').value;
    const to = document.getElementById('toSpeed').value;
    
    if (isNaN(value)) {
        document.getElementById('speedResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to m/s first
    const toMPS = {
        'mps': 1,
        'kph': 1/3.6,
        'mph': 0.44704,
        'fps': 0.3048,
        'knot': 0.514444,
        'mach': 343 // Approximate speed of sound
    };
    
    const mps = value * toMPS[from];
    const result = mps / toMPS[to];
    
    document.getElementById('speedResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Currency Conversion (using approximate rates)
function convertCurrency() {
    const value = parseFloat(document.getElementById('currencyValue').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    
    if (isNaN(value)) {
        document.getElementById('currencyResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Approximate exchange rates to USD (these would normally come from an API)
    const toUSD = {
        'USD': 1,
        'EUR': 1.08,
        'GBP': 1.25,
        'JPY': 0.0067,
        'INR': 0.012,
        'CAD': 0.74,
        'AUD': 0.66,
        'CHF': 1.10,
        'CNY': 0.14,
        'KRW': 0.00075
    };
    
    const usd = value * toUSD[from];
    const result = usd / toUSD[to];
    
    document.getElementById('currencyResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

// Volume Conversion
function convertVolume() {
    const value = parseFloat(document.getElementById('volumeValue').value);
    const from = document.getElementById('fromVolume').value;
    const to = document.getElementById('toVolume').value;
    
    if (isNaN(value)) {
        document.getElementById('volumeResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to milliliters first
    const toML = {
        'ml': 1,
        'l': 1000,
        'm3': 1000000,
        'gal': 3785.41,
        'qt': 946.353,
        'pt': 473.176,
        'cup': 236.588,
        'floz': 29.5735,
        'tbsp': 14.7868,
        'tsp': 4.92892
    };
    
    const ml = value * toML[from];
    const result = ml / toML[to];
    
    document.getElementById('volumeResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Area Conversion
function convertArea() {
    const value = parseFloat(document.getElementById('areaValue').value);
    const from = document.getElementById('fromArea').value;
    const to = document.getElementById('toArea').value;
    
    if (isNaN(value)) {
        document.getElementById('areaResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to square meters first
    const toM2 = {
        'mm2': 0.000001,
        'cm2': 0.0001,
        'm2': 1,
        'km2': 1000000,
        'in2': 0.00064516,
        'ft2': 0.092903,
        'yd2': 0.836127,
        'acre': 4046.86,
        'hectare': 10000,
        'mile2': 2589988.11
    };
    
    const m2 = value * toM2[from];
    const result = m2 / toM2[to];
    
    document.getElementById('areaResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Data Conversion
function convertData() {
    const value = parseFloat(document.getElementById('dataValue').value);
    const from = document.getElementById('fromData').value;
    const to = document.getElementById('toData').value;
    
    if (isNaN(value)) {
        document.getElementById('dataResult').innerHTML = 'Please enter a valid number';
        return;
    }
    
    // Convert to bits first
    const toBits = {
        'bit': 1,
        'byte': 8,
        'kb': 8000,
        'mb': 8000000,
        'gb': 8000000000,
        'tb': 8000000000000,
        'pb': 8000000000000000,
        'kib': 8192,
        'mib': 8388608,
        'gib': 8589934592,
        'tib': 8796093022208
    };
    
    const bits = value * toBits[from];
    const result = bits / toBits[to];
    
    document.getElementById('dataResult').innerHTML = 
        `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

// Number System Conversion
function convertNumber() {
    const value = document.getElementById('numberValue').value.trim();
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    
    if (!value) {
        document.getElementById('numberResult').innerHTML = 'Please enter a number';
        return;
    }
    
    try {
        // Convert to decimal first
        const decimal = parseInt(value, fromBase);
        
        if (isNaN(decimal)) {
            document.getElementById('numberResult').innerHTML = 'Invalid number for selected base';
            return;
        }
        
        // Convert to target base
        const result = decimal.toString(toBase).toUpperCase();
        
        document.getElementById('numberResult').innerHTML = 
            `${value} (base ${fromBase}) = ${result} (base ${toBase})`;
        
        // Show all conversions
        document.getElementById('binaryResult').innerHTML = 
            `Binary: ${decimal.toString(2)}`;
        document.getElementById('octalResult').innerHTML = 
            `Octal: ${decimal.toString(8)}`;
        document.getElementById('decimalResult').innerHTML = 
            `Decimal: ${decimal}`;
        document.getElementById('hexResult').innerHTML = 
            `Hexadecimal: ${decimal.toString(16).toUpperCase()}`;
            
    } catch (error) {
        document.getElementById('numberResult').innerHTML = 'Error in conversion';
    }
}
