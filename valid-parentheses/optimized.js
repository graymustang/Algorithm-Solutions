function hasValidParentheses(string){

    const parentheses = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const seen = []
    const last = seen[seen.length - 1]

    for (const char of string){
        if () //opening brace, push

        if () //get top of stackj, 
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