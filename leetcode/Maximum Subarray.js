const maxSubArray = nums => {
    let tempSum  = 0;
    let largestSum = nums[0];
    for(let n of nums) {
        tempSum  = Math.max(tempSum + n,  n)
        largestSum = Math.max(largestSum, tempSum);
    }
    return largestSum
}