function convertCToAll(temperature) {
    // (32°F − 32) × 5/9 = 0°C
    const fTemp = (temperature - 32) * 5/9
    // 0°C + 273.15 = 273.15K
    const kTemp = (temperature + 273.15)
    const out = [fTemp.toFixed(2),kTemp]
    return out
}

const cTemp = 25
const temperature = convertCToAll(cTemp)

console.log(`${cTemp} °C is ${temperature[0]} °F and ${temperature[1]} K `)