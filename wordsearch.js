const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(le => le.join(''));
    
    for (const horiWords of horizontalJoin) {
        if (horiWords.includes(word) || horiWords.includes(reverseWord(word))) return true
    }
    for (const verWords of verticalJoin) {
        if (verWords.includes(word)) return true
    }
    return false;
};
const reverseWord = newWord => {
    const newReverseWord = newWord.split('').reverse().join('');
    return newReverseWord;
}

// Callback
const transpose = function(matrix) {
    let result = [];
    let subArray = [];
    const columns = matrix[0].length;
    const rows = matrix.length;
    
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            subArray.push(matrix[j][i])
            if (j === rows - 1) {
                result.push(subArray)
                subArray = [];
            }
        }
    }
    return result;
};


module.exports = wordSearch
