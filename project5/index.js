function sumArr(arr){
    let sum = 0
    for(num of arr){
        sum += num
    }
    return sum
}
const numArr = [1,2,3,4,5]
console.log(sumArr(numArr))

function sumArr2(arr){
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
const numArr2 = [1,2,3,4,5]
console.log(sumArr2(numArr2))