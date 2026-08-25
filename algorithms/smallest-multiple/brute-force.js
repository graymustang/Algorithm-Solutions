function missingMultiple(nums, k) {

    let multiple = k
    while (nums.includes(multiple)){
        multiple += k
    }
    return multiple
}

function main () {
    let nums = [8,2,3,4,6]
    let k = 2
    console.log(missingMultiple(nums, k))
}

main()
