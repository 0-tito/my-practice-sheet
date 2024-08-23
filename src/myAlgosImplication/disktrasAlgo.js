 // WEIGHTED GRAPH
 export let weightedGraph = {
    start: {
       A:6,
       B:2,
       fin:Infinity,
    },
    A:{
      fin:1
    },
    B: {
      A:3,
      fin:5
    },
    fin:{}
  }
  
  export function disktrasAlgo(graph) {
  
    // immutable graph 
  let Graph = {...graph}

    //hash table to store the costs of all nodes from start
  let costs = Graph["start"]

  let parents = {}
  for (const node in costs) {
    parents[node] = "start"
  }
  
    // Array to keep track of processed nodes
  let processed = []
  
  
     let onProcessNode = () => {
   // get node with lowest cost
    let getLowestCostNode = (costs) => {
      let lowestCost = Infinity
      let lowestCostNode = undefined
       for (let cost in costs) {
         if( costs[cost] < lowestCost && !processed.includes(cost)){
           lowestCost = costs[cost]
           lowestCostNode = cost
         }
       }
       return lowestCostNode
     }
     let node = getLowestCostNode(costs)
  
   // base case
  //  If all nodes have either been processed or have an infinite cost
      if(!node){
        // console.log("base case hit")
        return graph
      }       
  
  // recursive case
  else {  
      if(!processed.includes(node)){
       
      const neighbours = Graph[node]
      let cost = costs[node]
  
      // go through the neighbours of this node
      for (const n in neighbours) {
        let newCost = cost + neighbours[n]
        // update the costs and parent if Scost is lesser than new cost
        if(costs[n] > newCost){
          costs[n] = newCost
          parents[n] = node
         
        }
      }
        // after we update the cost of all the nieghbours of this node,add it to the processed collection
        processed.push(node)
        delete Graph[node]
        onProcessNode()
      }
    }  
  };
  onProcessNode()
  
   return {costs,parents}
  }