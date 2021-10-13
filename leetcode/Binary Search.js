const search = (nums,target) => {
    let first = 0 
    let last = nums.length - 1
    while (first <= last) {
       let middle = ~~((first+last)/2)
       if(nums[middle] == target) return middle
       if(nums[middle]<target) first = middle+1
       else last = middle-1
    }
    return -1
}

console.log(search([0,2,4,6,8,10,12,14,16],4))