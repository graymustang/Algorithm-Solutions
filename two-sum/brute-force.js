function twoSum (nums, target){
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
}

function main(){
    const nums = [1, 6, 8, 11]
    const target = 18

    console.log(twoSum(nums, target))
}

main()