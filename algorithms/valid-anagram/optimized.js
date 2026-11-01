function validAnagram(s, t) {

    if (s.length !== t.length) {
        return false
    }

    const counts = new Map()

    for (const char of s) {
        counts.set(char, (counts.get(char) || 0) + 1)
        console.log(counts)
    }

    for (const char of t) {
        // Check if char has any remaining count
        if(!counts.has(char) || counts.get(char) === 0) {
            return false
        }
        counts.set(char, (counts.get(char) || 0) - 1)
    }
    
    return true
}

function main() {
    const s = 'anagram'
    const t = 'naargam'
    console.log(validAnagram(s, t))
}

main()
