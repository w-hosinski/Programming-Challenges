let list = document.getElementById("list")
function counter() {
    for(let i=1; i<101;i++) {
        if(i%15===0) list.innerHTML += `<div>fizzbuzz</div>` 
        else if(i%5===0) list.innerHTML += `<div>buzz</div>`
        else if(i%3===0) list.innerHTML += `<div>fizz</div>`
        else list.innerHTML += `<div>${i}</div>`
    }
}   
function add(...args){
    return args.reduce((a,b) => a+b,0)
}


function stringIncludes(a,b){
    return a.toLowerCase().includes(b.toLowerCase())
}


function getNames(...objects) {
    let nameArr = []
    let names = objects.forEach((el) => {
        if (el.name != undefined) nameArr.push(el.name)
    })
    return nameArr
}

function getLargestNumberIndex(arr) {
    let largestNum = arr.reduce((a,b) => Math.max(a,b),0)
    return arr.indexOf(largestNum)
}

function greatestCommonDivisor(a,b) {
    for (let i = Math.max(a,b)/2; i>1; i--) {
        if(a%i==0 && b%i==0) return i
    }
    return 1
}


