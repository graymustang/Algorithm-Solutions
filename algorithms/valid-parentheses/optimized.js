function hasValidParentheses(string){

    const parentheses = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const seen = []
    const last = seen[seen.length - 1]

    for (const char of string){
        if (parentheses.has(char)){
            const last = seen.pop()

            if (last != parentheses.get(char)){
                return false
            }
        } else {
            seen.push(char)
        }
    }
    return seen.length === 0
}

function main () {
    let string = "[]{}()"
    console.log(hasValidParentheses(string))
}

main()