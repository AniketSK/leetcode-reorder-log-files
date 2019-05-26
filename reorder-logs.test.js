const { reorderLogFiles, isNumberLog, normalizeIdentifierInAlphabetLogs } = require('./reorder-logs');

describe("Internal details", () => {
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

    describe("Alphabet comparisons", () => {

        test('alphabet logs are reordered correctly for comparison', () => {
            let exampleData = "a1 c d e"
            let expectedOutput = ['c', 'd','e','a','1']
            expect(normalizeIdentifierInAlphabetLogs(exampleData)).toEqual(expectedOutput)
        })
    })
})

test('number logs are not reordered relative to alphabet logs', () => {
    let exampleData = ["a1 3 4 5", "c4 3 4 1", "b3 a b c",  "d8 2 3 1"]
    let expectedOutput = ["b3 a b c", "a1 3 4 5", "c4 3 4 1", "d8 2 3 1"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})

test('alphabet logs are sorted alphabetically, ignoring identifier', () => {
    let exampleData = ["a1 c d e", "b2 a d e"]
    let expectedOutput = ["b2 a d e", "a1 c d e"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})

test('alphabet logs are sorted alphabetically, when only identifiers differ', () => {
    let exampleData = ["b2 a", "a2 a"]
    let expectedOutput = ["a2 a", "b2 a"]
    expect(reorderLogFiles(exampleData)).toEqual(expectedOutput)
})

test('Gets the expected output stated on leetcode', () => {
    let sampleInput = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
    let expectedOutput = ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

    let result = reorderLogFiles(sampleInput)
    expect(result).toEqual(expectedOutput)
})

test('Gets the complex expected output stated on leetcode', () => {
    let sampleInput = ["6p tzwmh ige mc", "ns 566543603829", "ubd cujg j d yf", "ha6 1 938 376 5", "3yx 97 666 56 5", "d 84 34353 2249", "0 tllgmf qp znc", "s 1088746413789", "ys0 splqqxoflgx", "uhb rfrwt qzx r", "u lrvmdt ykmox", "ah4 4209164350", "rap 7729 8 125", "4 nivgc qo z i", "apx 814023338 8"]
    let expectedOutput = ["ubd cujg j d yf","u lrvmdt ykmox","4 nivgc qo z i","uhb rfrwt qzx r","ys0 splqqxoflgx","0 tllgmf qp znc","6p tzwmh ige mc","ns 566543603829","ha6 1 938 376 5","3yx 97 666 56 5","d 84 34353 2249","s 1088746413789","ah4 4209164350","rap 7729 8 125","apx 814023338 8"]

    let result = reorderLogFiles(sampleInput)
    expect(result).toEqual(expectedOutput)
})