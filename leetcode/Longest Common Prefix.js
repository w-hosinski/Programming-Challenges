let longestCommonPrefix = strs => {
    if (strs.length == 1) return strs.join("")
    let checkedString = []
    if(strs[0].charAt(0) == "") return ""
    for(i=0;i<strs[0].length;i++){
        checkedString.push(strs[0].charAt(i))
        for (string of strs) {
            if (string.charAt(i) != checkedString[i]) {
                let result = checkedString.join("")
                //if (!result.substring(0,result.length-1)) return ""
                return result.substring(0,result.length-1)
            }
        }
    }
    return strs[0]
}
console.log(longestCommonPrefix(["a","a"]))
