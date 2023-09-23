module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }

    let arr = String(n).split("");

    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[0] == 0) {
            return;
        } else {
            result.push(arr[i]);
        }
    }

    return result.join("");
};
