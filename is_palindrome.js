export function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        const left = typeof s[i] === 'string' ? s[i].toLowerCase() : s[i];
        const right = typeof s[j] === 'string' ? s[j].toLowerCase() : s[j];
        if (left !== right) return false;
        i++; j--;
    }
    return true;
}
