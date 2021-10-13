const searchInsert = (nums,target) => {
    let first = 0 
    let last = nums.length - 1
    while (first <= last) {
       let middle = ~~((first+last)/2)
       if(nums[middle] == target) return middle
       if(nums[middle]<target) first = middle+1
       else last = middle-1
    }
    return first
}