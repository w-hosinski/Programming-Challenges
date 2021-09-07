/* 
1. start with 10^(n*2)
2. reduce by one and check if its a palindrome (potPali)
3. if it is: sqrt(potPali), round down (set to i) and check if potPali%i == 0 and if potPali%i has n digits ( between 10^(n-1) && (10^n)-1 )    
4. if both conditions hold, return potPali, else reduce i by one.
5. once i goes below 10^n, return to 2.
*/

const isPalindrome = n => {
    n = n.toString()
    var halfLen = Math.floor(n.length / 2)
    for (var i = 0; i < halfLen; i++) 
        if (n[i] !== n[n.length-i-1]) return false
    return true
}

 const largestPalindromeProduct = n => {
    for (let potPali = (10**(n*2))-1; potPali>=10**n; potPali--) {
        if (isPalindrome(potPali)) {
            for (let i = (10**n)-1; i>=10**(n-1); i--) {
                if (potPali%i == 0 && (potPali/i)<=(10**n)-1 && 10**(n-1)<=(potPali/i)) return potPali 
            }
        }
    }
}

console.log(`largestPalindromeProduct für 3 ist ${largestPalindromeProduct(3)}`)