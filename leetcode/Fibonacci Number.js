const fib = n => {
    let i = 0
    let j = 1
    if(n==0) return 0
    if(n==1) return 1
    for(k=1;k<n;k++){
        if(i<j) i = i+j
        else j = i+j   
    }
    return Math.max(i,j)
}