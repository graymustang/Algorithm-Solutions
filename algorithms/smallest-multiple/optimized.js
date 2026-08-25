function missingMultiple(nums, k) {

    const hashSet = new Set(nums)
    let multiple = k

    while (hashSet.has(multiple)){
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
