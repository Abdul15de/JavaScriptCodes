// let a = [1,3,4,5,6,7,8,9]; //type of array is object here key is index ans value is value at that index.
// console.log(a);
// console.log(typeof a);
// // arrays are mutable while srtings are mutable

//10% dicount on items

let prices = [300,400,500,600,700];
let dis=0;
for(let val of prices)
{
  dis=val/10;
  val=val-dis;
}
console.log(prices); // output= [300, 400, 500, 600, 700] whch is not the desired output
//for of does not change the value of arrayso to do it we use for loop using index

for(let i=0; i<prices.length; i++)
{
    dis=prices[i]/10;
    prices[i]=prices[i]-dis;
}
console.log("price after discount=",prices); // [270, 360, 450, 540, 630] -> desirerd output

