function isPalindrome (string){
    // Push the characters onto a stack, and then pop
    const stack = []

    for (const char of string) {
        stack.push(char)
    }

    for(const char of string){
        if (char !== stack.pop()){
            return false
        }
    }
    return true
}

function main(){
    const string = "racecar"
    console.log(isPalindrome(string))
    console.log(isPalindrome("hello"))
    console.log(isPalindrome("abba"))
}

main()