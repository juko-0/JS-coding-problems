//10. Regular Expression Matching
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const regex = new RegExp(`^${p}$`);
    console.log(regex);
    return (regex.test(s))
};
console.log(isMatch("aaa", "aaa"));