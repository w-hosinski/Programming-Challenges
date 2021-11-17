/*  Symmetrische Differenz ist wie ein XOR, es kommen nur die Elemente durch, welche genau ein Mal in zwei Arrays vorkommen. 
    Da es eine binäre operation ist, werden bei mehr als 2 (n) Arrays als input n-1 operationen gebraucht
    1. Die ersten zwei Arrays variblen zuweisen
    2. Duplikate entfernen
    3. Alles in ein array combinieren und sortieren
    4. Nach duplikaten suchen und diese entfernen
    5. Falls es mehr als 2 Arrays sind: Gefiltertes Array der ersten Array variable zuweisen und dem nächsten Array die zweite varible
*/
const sym = arrs => {
    let firstArr = arrs[0]
    let sortedArr = []
    for (let arrCounter=1; arrCounter<arrs.length; arrCounter++) {
        let secondArr = arrs[arrCounter]
        firstArr = [...new Set(firstArr)]
        secondArr = [...new Set(secondArr)]
        let combinedArrs = firstArr.concat(secondArr)
        sortedArr = combinedArrs.sort()
        for(let i=0; i<sortedArr.length-2; i++) {
            if(sortedArr[i] == sortedArr[i+1]) {
                sortedArr.splice(i,2)
                i--
            }
        }
        firstArr = sortedArr
    }
    return sortedArr
}
console.log("sym von [[1,2,3,2],[1,2,2,2,2,5],[1,2,3]] ist:")
console.log(sym([[1,2,3,2],[1,2,2,2,2,5],[1,2,3]]))
                 