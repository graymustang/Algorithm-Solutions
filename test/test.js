function reverseString(string){
    let chars = string.split("")

    console.log(chars)
    let left = 0
    let right = string.length - 1

    while (left < right) {
        let temp = chars[left]
        chars[left] = chars[right]
        chars[right] = temp

        left++
        right--
    }
    console.log(chars)
    return chars.join("")
}

console.log(reverseString('Hello World'))
