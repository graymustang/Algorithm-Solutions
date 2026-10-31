function hasDuplicate(nums) {
    const stack = []

    for (const num of nums) {

        if (stack.includes(num)) {
            return true
        } else {
            stack.push(num)
        }
    }

    return false
}

function main() {
    let nums = [1, 2, 3, 1]
    console.log(hasDuplicate(nums))
}

main()
