import { capitalize, allLowercase, allUpperCase } from '../../src/utils/index'

describe('Test Capitalize Function', () => {
    it('input not avaliable', () => {
        const response = capitalize('')
        expect(response).toBeFalsy()
        expect(response).toBe('')
    })
    it('input avaliable', () => {
        const response = capitalize('test')
        expect(response).toBeTruthy()
        expect(response).toBe('Test')
    })
})

describe('All LowerCase Function', () => {
    it('input not avaliable', () => {
        const response = allLowercase('')
        expect(response).toBeFalsy()
        expect(response).toBe('')
    })
    it('input not avaliable', () => {
        const response = allLowercase('sd')
        expect(response).toBeTruthy()
        expect(response).toBe('sd')
    })
})

// describe('All UpperCase Function', () => {
//     it('input not avaliable', () => {
//         const response = allLowercase('')
//         expect(response).toBeFalsy()
//         expect(response).toBe('')
//     })
//     it('input avaliable', () => {
//         const response = allUpperCase('dsdf')
//         expect(response).toBeTruthy()
//         expect(response).toBe('DSDF')
//     })
    
// })