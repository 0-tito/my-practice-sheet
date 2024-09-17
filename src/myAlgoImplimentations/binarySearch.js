 // binarySearch
  export default function binarySearch(array, item){
    let low = 0
    let high = array.length - 1
 
    let recursiveStep = () => {
      // base case
     if(low > high){
       return "item not found"
      }
      
     let mid = Math.floor((low + high) / 2)
     let guess = array[mid]
       
      if(guess === item){
       return item
      } 
      else if(guess > item){
       return recursiveStep(high = guess - 1)
      }
      else if(guess < item){
       return recursiveStep( low = guess + 1)
      }
    }
    return recursiveStep()
 }