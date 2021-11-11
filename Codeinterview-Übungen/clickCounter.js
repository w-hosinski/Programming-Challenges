document.getElementById("counterButton").addEventListener("click",counter)

let incrementer = 0
function counter() {
    incrementer++
    document.getElementById("display").innerText = incrementer
}