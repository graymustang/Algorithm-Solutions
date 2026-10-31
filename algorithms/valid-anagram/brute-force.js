function validAnagram(s, t) {
    const seen1 = new Set()
    const seen2 = new Set()

    for (const char of s) {
        seen1.add(char)
        console.log(seen1)
    }

    for (const char of t) {
        seen2.add(char)
        console.log(seen2)
    }

    if (seen1 !== seen2) {
        return false
    }
    return true
}

function main() {
    const s = 'anagram'
    const t = 'nagaram'
    console.log(validAnagram(s, t))
}

main()
