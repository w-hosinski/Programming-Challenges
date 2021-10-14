const twoSum = (nums,target) => {
    let deleteCounter = 0
    while (nums.length>1){ 
        for(i=1;i<nums.length;i++){
            if(nums[0]+nums[i] == target) return [deleteCounter,i+deleteCounter] 
        }
        deleteCounter++
        nums.shift()
    }
}