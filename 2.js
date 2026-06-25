//1189. Maximum Number of Balloons
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let input = text.split("");
    let count = 0;
    let restart = true;

    while (restart) {
        restart = false;
        let check = "balloon".split("");

        for (let i = 0; i < input.length && check.length > 0; i++) {
            for (let j = 0; j < check.length; j++) {
                if (input[i] === check[j]) {
                    input.splice(i, 1);
                    check.splice(j, 1);
                    i--; 
                    break;
                }
            }
        }

        if (check.length === 0) {
            count++;
            restart = true;
        }
    }

    return count;
};