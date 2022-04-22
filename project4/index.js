const existsWithin = (arr,str) => {
    return (arr.includes(str))
}

const arr = ['Todd', 'Darie','Jonathan','Zach','Manny']
const str = 'Todd'
//console.log(existsWithin(arr,str))

existsWithin(arr,str)?
console.log('He is here'):
console.log('He is not here')