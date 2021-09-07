const multiplesOf3and5 = n => {
    let result = 0
    for(let i = 3; i<n; i+=3) i%15 ? result+=i: null
    for(let j = 5; j<n; j+=5) result+=j   
    return result
}
console.log(`multiplesOf3and5 für 1000 ist ${multiplesOf3and5(1000)}`)