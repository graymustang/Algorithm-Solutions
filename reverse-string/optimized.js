function reverseString(string){
    // Strings are immutable in JS, so convert string to array of characters first
    let chars = string.split("")

    let left = 0, right = chars.length - 1

    while (left < right){
        let temp = chars[left]

        // [chars[left], chars[right]] = [chars[right], chars[left]]
        chars[left] = chars[right]
        chars[right] = temp
        left++
        right--
    }

    return chars.join("")
}

function main (){

    let string = "Hello World!"
    console.log(reverseString(string))
    
}

main()