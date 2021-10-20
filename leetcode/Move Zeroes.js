const moveZeroes = nums => {
    for (let n of nums) {
        if(n==0) {
            nums.splice(nums.indexOf(n),1)
            nums.push(0)
        } 
    }
    return nums
}

console.log(moveZeroes([1,0,2,3,4,0]))