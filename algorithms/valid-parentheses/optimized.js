function hasValidParentheses(string){

    const parentheses = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const seen = []
    const last = seen[seen.length - 1]

    for (const char of string){
        if (seen(char)){
            
        } //opening brace, push

        if () //get top of stack, 
    }

    if (seen.length === 0){
        return true
    } else {
        return false
    }
}

function main () {
    let string = "()"
    console.log(hasValidParentheses(string))

}

main()