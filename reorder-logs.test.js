const { reorderLogFiles, isNumberLog } = require('./reorder-logs');

let sampleInput = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
let expectedOutput = ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

test('isNumberLog correctly identifies alphabet logs' , () => {
    expect(isNumberLog("g1 act car")).toBe(false)
})

test('isNumberLog correctly identifies for number logs' , () => {
    expect(isNumberLog("zo4 4 7")).toBe(true)
})

test.skip('Gets the expected output', () => {
    let result = reorderLogFiles(sampleInput)
    expect(result).toEqual(expectedOutput)
})