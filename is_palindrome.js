export function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++; j--;
    }
    return true;
}
