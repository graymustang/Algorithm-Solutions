function hasDuplicate(nums) {
    const seen = new Set()

    for (const num of nums) {
        if (seen.has(num)) {
            return true
        } else {
            seen.add(num)
        }
    }
    return false
}

function main() {
    let nums = [1, 2, 3, 1]
    console.log(hasDuplicate(nums))
}

main()
