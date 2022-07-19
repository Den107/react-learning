const reverseString = (str) => {
    return str.split('')
        .sort(() => -Infinity)
        .join('')
}

module.exports = reverseString