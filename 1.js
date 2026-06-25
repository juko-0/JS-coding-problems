//1833. Maximum Ice Cream Bars
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
let count=0;
for(let item of costs.sort((a,b)=>a-b)){
if (coins < item) break;
 coins -= item, count++;
}
return count;
};