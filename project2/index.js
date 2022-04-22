function convertFToC(temperature) {
    // (32°F − 32) × 5/9 = 0°C
    const newTemp = (temperature - 32) * 5/9
    return newTemp
}

const fahrenheit = 104
const celcius = convertFToC(fahrenheit)

console.log(`${fahrenheit} ℉ is ${celcius} ℃`)