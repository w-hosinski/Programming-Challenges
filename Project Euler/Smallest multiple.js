const smallestMult = n => {
    for (let i = n; i<n**n;i+=n) {
        let counter = 0
        for (let j = n-1; j>1; j--) {
           if (i%j == 0) counter++  
        }
        if (counter == n-2) return i
    }
}
console.log(`smallestMult für 10 ist ${smallestMult(10)}`)