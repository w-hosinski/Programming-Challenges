function averageSubarray(arr,K) {
    let result = []
    let subArray = arr.slice(0,K)
    let avg = subArray.reduce((a,b)=>a+b, 0)/K
    result.push(parseFloat(avg.toFixed(5)))
    for(let i=0; i<arr.length-K;i++) {
        avg -= arr[i]/5
        avg += arr[K+i]/5
        result.push(parseFloat(avg.toFixed(5)))
    }
    return result
}
console.log(averageSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2],5))