const { reorderLogFiles, isNumberLog } = require('./reorder-logs');

test('isNumberLog correctly identifies alphabet logs' , () => {
    expect(isNumberLog("g1 act car")).toBe(false)
})

test('isNumberLog correctly identifies for number logs' , () => {
    expect(isNumberLog("zo4 4 7")).toBe(true)
})

test('number logs are moved behind alphabet logs', () => {
    let exampleData = ["a1 3 4 5","b3 a b c"]
    let expectedOutput = ["b3 a b c", "a1 3 4 5"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})

test('number logs are left behind alphabet logs', () => {
    let exampleData = ["b3 a b c", "a1 3 4 5"]
    let expectedOutput = ["b3 a b c", "a1 3 4 5"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})

test('number logs are not reordered relative to alphabet logs', () => {
    let exampleData = ["a1 3 4 5", "c4 3 4 1", "b3 a b c",  "d8 2 3 1"]
    let expectedOutput = ["b3 a b c", "a1 3 4 5", "c4 3 4 1", "d8 2 3 1"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})



test.skip('Gets the expected output', () => {
    let sampleInput = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
    let expectedOutput = ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

    let result = reorderLogFiles(sampleInput)
    expect(result).toEqual(expectedOutput)
})