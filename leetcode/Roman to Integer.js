const romanToInt = s => {
    let arr = s.split("")
    let sum = 0
    let specChars = ["IV","IX","XL","XC","CD","CM",4,9,40,90,400,900]
    for(let i = 0; i<6; i++) {
        if(s.indexOf(specChars[i]) != -1){
            arr.splice(s.indexOf(specChars[i]),2)
            console.log(arr)
            sum += specChars[i+6]
        }
    }
    for(num of arr) {
        switch(num) {
            case "I": sum++ 
            break
            case "V": sum+=5 
            break
            case "X": sum+=10 
            break
            case "L": sum+=50 
            break
            case "C": sum+=100 
            break
            case "D": sum+=500 
            break
            case "M": sum+=1000 
            break
        }
    }
    return sum
}
romanToInt("IV")