// breadth first search
export const graph = {
    Alice: {
      friends: ["Bob", "Claire", "Frank"],
      mangoSeller: false,
    },
    Bob: {
      friends: ["Alice", "David"],
      mangoSeller: false,
    },
    Claire: {
      friends: ["Alice", "Eve", "Frank"],
      mangoSeller: false,
    },
    David: {
      friends: ["Bob", "Grace"],
      mangoSeller: false,
    },
    Eve: {
      friends: ["Claire", "Ivy"],
      mangoSeller: false,
    },
    Frank: {
      friends: ["Alice", "Claire"],
      mangoSeller: false,
    },
    Grace: {
      friends: ["David", "Hank"],
      mangoSeller: false,
    },
    Hank: {
      friends: ["Grace", "Ivy"],
      mangoSeller: false,
    },
    Ivy: {
      friends: ["Eve", "Hank"],
      mangoSeller: true,
    }
  };
  
   export function breadthFirstSearch(graph) {
    let queue = []
    let searched = []
  queue.push(graph.Alice)

  while (queue.length > 0) {
    let person = queue.shift() 
    if(!searched.includes(person)){
      if(person.mangoSeller){
       console.log("mangp seller found " + person)
       return true
      }
      else{
        searched.push(person)
        queue.push(...person.friends.map(friendName => graph[friendName]))
      }
    }
   }
   console.log("no mango seller in your network")
   return false
   }