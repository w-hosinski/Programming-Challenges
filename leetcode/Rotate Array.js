const rotate = (nums, k) => {
    let endPiece = nums.splice(-k,k)
    nums.splice(0,0,...endPiece)
    return nums
}
console.log(rotate([1,2,3,4,5,6,7],2))