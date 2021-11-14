function maximumSubarray(arr, K) {
let maxIndex = 0
let subArray = arr.slice(0,K)
let sum = subArray.reduce((a,b) => a+b,0)
let maxSum = sum
for(let i=0;i<arr.length-K;i++) {
    sum -= arr[i]
    sum += arr[K+i]
    if(sum>maxSum) {
        console.log("Test")
        maxSum = sum
        maxIndex = i+1
    }
}
return arr.slice(maxIndex,K+maxIndex)
}

console.log(maximumSubarray([5,4,3,9,5,1],3))
