export const arayForFindMax = [1,5,7,9,34,8]

// find max
export function findMax(array){
    let tracker = -Infinity
   function search(index){
    // base case
    if(index >= array.length){
      return 
    }
    else{
      // array[index] > tracker ? tracker = array[index] : undefined
      if(array[index] > tracker){
        tracker = array[index] 
      }
      search(index + 1)
    }
   }
    search(0)
    return tracker
  }