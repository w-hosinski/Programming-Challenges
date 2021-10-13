const containsDuplicate = nums => {
    const dupsRemoved = [...new Set(nums)]
    if(dupsRemoved.length<nums.length) return true
    else return false
}