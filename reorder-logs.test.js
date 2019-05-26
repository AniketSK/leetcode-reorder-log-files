const reorderLogFiles = require('./reorder-logs');

let sampleInput = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
let expectedOutput = ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

test('Gets the expected output', () => {
    let result = reorderLogFiles(sampleInput)
    expect(result).toBe(expectedOutput)
})