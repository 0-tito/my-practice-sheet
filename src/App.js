import './App.css';
import binarySearch from './myAlgosImplication/binarySearch';
import { graph,breadthFirstSearch } from './myAlgosImplication/breadthFirstSearch';
import { arayForFindMax,findMax } from './myAlgosImplication/findMax';
import { arrayForMultip,multiplicationTable } from './myAlgosImplication/multiplicationTable';
import { weightedGraph,disktrasAlgo } from './myAlgosImplication/disktrasAlgo';

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

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
