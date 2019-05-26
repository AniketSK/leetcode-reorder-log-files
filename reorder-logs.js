/**
 * Returns -1 if b should be before a, 0 if equal, 1 if a should be before b.
 * Rules via leetcode:
 *  1. All logs that begin with alphabets should be before any string with a number.
 *         Note: this still ignores identifiers (the first word) and considers second only
 *  2. Alphabet strings should be sorted lexicographically (alphebatized) but igoring the
 *         first word, which remains the identifier except:
 *  3. If two letter logs tie, then the identifier is used to order them.
 * @param {string} a one item to compare
 * @param {string} b second item that you're comparing with
 */
function compareLogs(a, b)
{
    let aIsNumber = isNumberLog(a)
    let bIsNumber = isNumberLog(b)
    if ( aIsNumber && bIsNumber ) {
        return 0 // Their relative position is maintained by considering them equal.
    }
    else if ( aIsNumber && !bIsNumber) {
        return 1 // a is less than since it's an alphabet log
    } else if ( !aIsNumber && bIsNumber ) {
        return -1 // a is greater than since it's the alphabet log
    } else {
        // They are both alphabet logs

    }
}

/**
 * Given an entire log of the type 'g1 act car', returns whether it's a number log or not.
 * Eg: true for "zo4 4 7"
 * false for "g1 act car"
 */
function isNumberLog(log) {
    // Take the first element of the log and check its type.
    return !Number.isNaN(Number.parseInt(log.split(' ')[1]))
}

/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
    return logs.sort(compareLogs);
};


module.exports = { reorderLogFiles, isNumberLog }