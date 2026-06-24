let items = [4, 6, 2, 1, 6, 3, 4, 8, 7, 1], coins =7, count=0;
for(let item of items.sort((a,b)=>a-b)){
if (coins < item) break;
 coins -= item, count++, console.log(item);
}
console.log(`Total items that can be purchased = ${count}`);
