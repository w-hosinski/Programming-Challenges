const isPrime = n => {
    for(let i = 2, s = Math.sqrt(n); i<=s; i++)
        if(n%i == 0) return false; 
    return true;
}
const largestPrimeFactor = n => {
    if (n==1) return null
    if (isPrime(n)) return n
    let primeArr = []
    for(let i=2; i<=n/2; i++) 
        if (isPrime(i)) primeArr.unshift(i)
    for (let prime of primeArr) 
        if (n%prime == 0) return prime
}

console.log(`largestPrimeFactor für 1000 ist ${largestPrimeFactor(1000)}`)