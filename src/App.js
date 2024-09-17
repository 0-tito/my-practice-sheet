import './App.css';
 /* import binarySearch from './myAlgoImplimentations/binarySearch';
import { graph,breadthFirstSearch } from './myAlgoImplimentations/breadthFirstSearch';
import { arayForFindMax,findMax } from './myAlgoImplimentations/findMax';
import { arrayForMultip,multiplicationTable } from './myAlgoImplimentations/multiplicationTable';
*/
import { weightedGraph,disktrasAlgo } from './myAlgoImplimentations/disktrasAlgo'; 
import { packKnapSack } from './dynamicProgramming/packKnapSack';
// import { statesNeeded,stations,setCover } from './myAlgoImplimentations/greedyAlgo';

//Binary Search
// let arrayForBinarySearch = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(binarySearch(arrayForBinarySearch,12))

// breadth first search
// console.log(breadthFirstSearch(graph))

// find max 
// console.log(findMax(arayForFindMax))

// multiplication table
// console.log(multiplicationTable(arrayForMultip,0))

// disktra"s algo
console.log(disktrasAlgo(weightedGraph))
packKnapSack(0)
// greedy algo
// setCover(stations,statesNeeded)
function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
