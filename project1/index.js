// function currencyConverter(amount,rate){
//     return (amount*rate).toFixed(2)
// }

// const usd = 15.00
// const exchangeRate = 4.75

// const brl = currencyConverter(usd,exchangeRate)

// console.log(`$ ${usd} dollars is $ ${brl} Brazilian Reais`)


const usd = 15.00
const exchangeRate = 4.75

const brl = (usd,exchangeRate) => {
        let value = (usd*exchangeRate).toFixed(2)
        return value
    }

console.log(`$ ${usd} dollars is $ ${brl(usd,exchangeRate)} Brazilian Reais`)
