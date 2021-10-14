const tribonacci = n => {
    let i = 0
    let j = 1
    let k = 1
    if(n==0) return 0
    if(n==1) return 1
    for(let l=2;l<n;l++) {
        if(i==Math.min(i,j,k)) i = i+j+k
        else if(j==Math.min(i,j,k)) j = i+j+k
        else k = i+j+k 
    }
    return Math.max(i,j,k)   
}
console.log(tribonacci(4))