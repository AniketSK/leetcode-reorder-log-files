/**
 * Returns -1 if b should be before a, 0 if equal, 1 if a should be before b.
 * Rules via leetcode:
 *  1. All logs that begin with alphabets should be before any string with a number.
 *         Note: this still ignores identifiers (the first word) and considers second only
 *  2. Alphabet strings should be sorted lexicographically (alphebatized) but igoring the
 *         first word, which remains the identifier except:
 *  3. If two letter logs tie, then the identifier is used to order them.
 *
 * Both a and b are guaranteed to be alphabet logs.
 * Since we ignore the identifiers at first but compare if their entire contents are equal:
 * 4. Just reordering the identifiers to the end and breaking early to inequalities achives
 *      what we're trying to do.
 * If their values are unequal, it'll break before it reaches the indentifiers.
 * So all we need to do is to put the identifier at the end and then compare normally
 * The only problem with this approach, is that identifiers also have number at the end,
 *  which will end up requiring them to be treated slightly differently.
 * Ok. But still there's a solution, by splitting the characters off the identifer,
 *     and appending that to the end of the array.
 * Since alphabets can still be compared, it's nearly the same!!
 * Since a < b, but 2 > 3, there's a reversal of the comparsion when you get down to numbers
 */
function compareAlphabetLogs(a, b) {
    let first = normalizeIdentifierInAlphabetLogs(a)
    let second = normalizeIdentifierInAlphabetLogs(b)
    for(i = 0; i < Math.min(first.length,second.length); i++ ){
        if ( first[i] < second[i] ) {
            return -1
        } else if ( first[i] > second[i] ) {
            return 1
        }
    }
    return 0; // They are identical, down to the identifiers
}

function normalizeIdentifierInAlphabetLogs(log) {
    // Get the characters in the logs in their own array, pop off the top (identifiers)
    let listA = log.split(' ')
    let logIdentifier = listA.shift()

    // Attach the identifers at the end for comparison. Note numbers need to be
    //  handled differently from the characters.
    listA = listA.concat( logIdentifier.split('') )

    return listA
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
 * Because javascript doesn't have a stable sort and we can't guarantee that the numbers won't be the same position,
 *  we're going to take all the numbers out of the array, sort it alphabetically and then append them back at the end.
 *  Dodging the need for a stable sort since the numbers will all be at the end anyway.
 * @param {string[]} logs to sort
 * @return {string[]} the sorted logs
 */
function reorderLogFiles(logs) {
    let onlyNumberLogs = logs.filter(isNumberLog) // Take the number logs out
    return logs.filter(num => !isNumberLog(num)) // Send only the alphabet logs array for sorting.
            .sort(compareAlphabetLogs)
            .concat(onlyNumberLogs) // Add the number logs back
};


module.exports = { reorderLogFiles, isNumberLog, normalizeIdentifierInAlphabetLogs }