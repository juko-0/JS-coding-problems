//backtracking
function subsetsOf4(arr) {
    const result = [];
    const current = [];

    function backtrack(start) {
        if (current.length === 4) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1);
            current.pop();
        }
    }

    backtrack(0);
    return result;
}

console.log(subsetsOf4([1,0,-1,0,-2,2]));