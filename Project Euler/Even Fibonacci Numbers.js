const fiboEvenSum = n => {
    let i = 1
    let j = 2 
    let result = 2
    if(n<2) return 0
    while (i+j<=n) {
        (i+j)%2 == 0 ? result+=i+j : null
        i<j ? i = i+j : j = i+j
    }
    return result
} 
console.log(`fiboEvenSum für 1000 ist ${fiboEvenSum(1000)}`)