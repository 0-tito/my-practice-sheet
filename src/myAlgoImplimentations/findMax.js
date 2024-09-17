export const arayForFindMax = [1,5,7,9,34,8]

/* recursively looping through an unordered list,
 to find the maxinum item(number)*/
export function findMax(array){
    let tracker = -Infinity
   function searchEachItem(index){
    // base case
    if(index >= array.length){
      return 
    }
    // recursive case
    else{
      if(array[index] > tracker){
        tracker = array[index] 
      }
      
      searchEachItem(index + 1)
    }
   }
    searchEachItem(0)
    return tracker
  }