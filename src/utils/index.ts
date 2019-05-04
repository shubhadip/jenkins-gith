export const capitalize = (input: string) => {
    if(!input){
        return ''
    }
    const first = input[0].toUpperCase()
    const rem = input.slice(1,input.length)
    return first + rem
}

export const allLowercase = (input: string) => {
    if(!input){
        return ''
    }
    return input.toLowerCase()
}
export const allUpperCase = (input: string) => {
    if(!input){
        return ''
    }
    return input.toUpperCase()
}