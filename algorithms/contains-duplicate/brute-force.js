function hasDuplicate(nums) {
    const stack = []

    for (const int of nums) {

        if (stack.includes(int)) {
            return true
        } else {
            stack.push(int)
        }
    }

    return false
}

function main() {
    let nums = [1, 2, 3, 5, 6, 7, 8, 9]
    console.log(hasDuplicate(nums))
}

main()
