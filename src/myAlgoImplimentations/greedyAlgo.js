/* THE SET COVERING PROBLEM: 
suppose you are starting a radio station,
and you want to reach as much listeners as possible.
It costs money to be on each station,
so we are trying to minimize the number of station we play on
*/

// you have a list of station, each station covers a region,and there"s overlap
export const stations = {
    "station1": new Set(["CA", "NV", "UT"]),
    "station2": new Set(["WA", "OR", "CA", "ID"]),
    "station3": new Set(["NY", "NJ", "PA"]),
    "station4": new Set(["TX", "OK", "LA", "NM"]),
    "station5": new Set(["FL", "GA", "AL", "MS"]),
    "station6": new Set(["MI", "OH", "IN"]),
    "station7": new Set(["IL", "MO", "IA"]),
    "station8": new Set(["CO", "WY", "NE", "KS","ME", "RI"]),
    "station9": new Set(["NC", "SC", "VA"]),
    "station10": new Set(["MA", "VT", "NH", ])
};

// A list of states i want to cover
export const statesNeeded = new Set([
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]);

/* APPROXIMATION ALGO: here"s a greedy algo that comes pretty close
1) pick the station that covers the most states that haven"t been covered yet,
   its ok if the station covers some states that have been covereed already
2) repeat until all the states are covered */

// TODO: Implement this function
export function setCover(stations,statesNeeded){
   let  bestStation = undefined
 let statesCovered = new Set()
   for (const station in stations) {
      let statesForStation = stations[station]
        // deriving values that exists in both statesNeeded and current running state set
      let covered = new Set([...statesNeeded].filter(state => statesForStation.has(state)))
      if (covered.size > statesCovered.size){
        bestStation = station
        statesCovered = covered
      }
    } 
}


//THE FUNITURE DELIVERY PROBLEM

// Function to calculate the total volume of a truck (assuming a fixed size)
function calculateTruckVolume(length, width, height) {
    // TODO: Implement this function
    return (length * width  * height )
}

// Function to calculate the volume of a box
function calculateBoxVolume(box) {
    // TODO: Implement this function
     let {length,width,height} = box 
      return (length * width * height)
}

// Function to pack the truck using a greedy strategy
function packTruck(truckDimensions, boxes) {
    const truckVolume = calculateTruckVolume(...truckDimensions);
    let remainingVolume = truckVolume;
    const packedBoxes = [];

    // TODO: Sort the boxes by volume (largest to smallest)
    boxes.sort((a,b) => calculateBoxVolume(b) - calculateBoxVolume(a))

    for (const box of boxes) {
        const boxVolume = calculateBoxVolume(box);
        // TODO: Implement the logic to check if the box fits and add it to the packedBoxes
        if(boxVolume <= remainingVolume){
            packedBoxes.push(box)
            remainingVolume =  remainingVolume - boxVolume
        }
        else {
            console.log(`truck is almost full ${boxVolume}`)
        }
        // TODO: Update the remaining volume of the truck
       

    }
    return {
        packedBoxes,
        remainingVolume
    };
}

// Example usage:

const truckDimensions = [100, 50, 50]; // Example truck dimensions: length, width, height

const boxes = [
    { id: 1, length: 20, width: 20, height: 20 },
    { id: 2, length: 10, width: 10, height: 10 },
    { id: 3, length: 30, width: 30, height: 30 },
    { id: 4, length: 15, width: 15, height: 15 },
    { id: 5, length: 25, width: 25, height: 25 }
];

// Call the function to pack the truck (you will implement this)
// const result = packTruck(truckDimensions, boxes);

// //Output the result (you can change this based on your implementation)
// console.log("Packed Boxes:", result.packedBoxes);
// console.log("Remaining Volume in Truck:", result.remainingVolume);



//THE KNAPSACK PROBLEM
/* Suppose you’re a greedy thief. You’re in a store with a knapsack,
and there are all these items you can steal. But you can only take what you can fit in 
your knapsack. 
 The knapsack can hold 35 pounds.
 You’re trying to maximize the value of the items you put in your knapsack. 
 What algorithm do you use? */

function packKnapsack(knapsackCapacity, items) {
    // Variables to hold the result
    const packedItems = [];
    let remainingCapacity = knapsackCapacity;
    let mostExpensivePackedItemValue = -Infinity
    // TODO: Implement sorting and packing logic
     items.sort((a,b) => a.weight- b.weight)
     for (const item of items) {
         if(item.value > mostExpensivePackedItemValue && item.weight <= remainingCapacity ){
            console.log(mostExpensivePackedItemValue, "most expensive item value")
            console.log(item.weight)
        remainingCapacity -= item.weight
       mostExpensivePackedItemValue = item.value
        packedItems.push(item)
         }
        // if(item.weight <= remainingCapacity){
        //     remainingCapacity -= item.weight
        //     packedItems.push(item)
        // }
     }
    
     console.log(packedItems, remainingCapacity)
     let packedItemsValue = packedItems.reduce((acc,curItem) => {
       return acc + curItem.value
     }, 0)

    return {
        packedItems,
        remainingCapacity,
        // TODO: Calculate total value of packed items
        packedItemsValue,
    };
}

// Example data structure usage
const items = [
    { weight: 10, value: 60 },
    { weight: 20, value: 130 },
    { weight: 15, value: 90 },
    { weight: 21, value: 110 },
];

const knapsackCapacity = 60;

// Call the function with your data structures
const result = packKnapsack(knapsackCapacity, items);

// TODO: Output the result
console.log("packed items",result.packedItems)
console.log("packed items",result.remainingCapacity)
console.log("packed items",result.packedItemsValue)