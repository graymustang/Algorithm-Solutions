function twoSum(nums, target){
    const seen = new Map();

    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if (seen.has(complement)){
            return [seen.get(complement), i];
        }

        seen.set(nums[i], i);
    }
    return []
}

function main (){
    const nums = [1, 4, 7, 9, 11];
    const target = 12;
    console.log(twoSum(nums, target));
    
}

main();