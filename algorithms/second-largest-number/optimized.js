function secondLargestNumber(nums) {

    let secondLargest = -Infinity
    let largest = -Infinity

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i]

        if (currentNumber > largest) {
            secondLargest = largest
            largest = currentNumber
        
        } else if (currentNumber > secondLargest && currentNumber !== largest) {
            secondLargest = currentNumber
        }
    }

    if(secondLargest === -Infinity) {
        return null
    }

    return secondLargest
}

function main() {
    const nums = [10, 5, 8, 20, 15]
    console.log(secondLargestNumber(nums))
}

main()