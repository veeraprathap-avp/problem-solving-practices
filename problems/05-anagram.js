const { runProblem } = require("../utils");

function isAnagram(s, t) {
     s = s.replace(/\s/g, '');
    t = t.replace(/\s/g, '');
    if (s.length !== t.length) return false;
    const count = new Map();
    for (let i = 0; i < s.length; i++) {
        count.set(s[i], (count.get(s[i]) || 0) + 1);
        count.set(t[i], (count.get(t[i]) || 0) - 1);
    }
    for (let [key, value] of count) {
        if (value !== 0) return false;
    }
    return true;
}

runProblem('isAnagram', () => {
    console.log('input: "listen", "silent"', isAnagram("listen", "silent"));   // true
    console.log('input: "hello", "world"', isAnagram("hello", "world"));     // false
    console.log('input: "dirty room", "dormitory"', isAnagram("dirty room", "dormitory")); // true
    console.log('input: "Tom Marvolo Riddle", "I am Lord Voldemort"', isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")); // true
});