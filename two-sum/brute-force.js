function twoSum (nums, target){
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                console.log("[" + nums[i] + ", " + nums[j] + "]")
            }
        }
    }
    return [i, j];
}

function main(){
    const nums = [1, 6, 8, 11];
    const target = 
}