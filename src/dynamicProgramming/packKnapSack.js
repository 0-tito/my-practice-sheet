/* The knap sack problem revisited */
/* i attempted this problem with a
greedy algo(found in myAlgoImplimentation/greedyAlgo.js),
this time i intend to try solving it with dynamic programming */
// Example data structure usage

export const items = [
    { name:"guitar", weight: 10, value: 60 },
    { name:"board", weight: 20, value: 130 },
    { name:"laptop", weight: 15, value: 90 },
    { name:"piano", weight: 21, value: 110 },
];
    
export const knapsackCapacity = 60

let grid = items.map(() => {
    return  Array(knapsackCapacity).fill(0)
})  

export function  packKnapSack(itemIndex){
// base case
if(itemIndex === items.length){
  return 
}

 const {weight,value} = items[itemIndex]
    
    for (let cell = 0; cell < knapsackCapacity; cell++) {
      // directly fill the first row
      if(itemIndex === 0){
        grid[itemIndex][cell] = (weight <= cell) ? value : 0
      }
      else{
        // formular for all other items
      grid[itemIndex][cell] =  Math.max(
     grid[itemIndex -1][cell], // exclude the current item
     (weight <= cell) ? grid[itemIndex-1][cell - weight] + value : grid[itemIndex -1][cell]  // include current item
      ) 
    }
    }
    packKnapSack(itemIndex+1)

}
console.log(grid)
  

