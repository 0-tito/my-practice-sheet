// The Vacation Problem 
/* suppose you are going to london for a nice vacation, you have two days there and 
alot of things you want to do. You cant do everything,so you make a list.
  For Each thing you want to see, you write down how long it will take and rate how much you want to see it.
  Can you figure out what you should see based on this list?. */

  const londonTrip = [
    { activity: "Visit the British Museum", time: 4, desire: 9 },
    { activity: "Take a Thames River Cruise", time: 2, desire: 7 },
    { activity: "Tour the Tower of London", time: 3, desire: 10 },
    { activity: "See the Changing of the Guard", time: 1, desire: 8 },
    { activity: "Visit the Tate Modern", time: 3, desire: 6 },
    { activity: "Explore the Natural History Museum", time: 3, desire: 9 },
    { activity: "Go to Covent Garden", time: 2, desire: 7 },
    { activity: "Walk in Hyde Park", time: 2, desire: 5 },
    { activity: "Visit the London Eye", time: 2, desire: 8 },
    { activity: "See Westminster Abbey", time: 2, desire: 10 },
    { activity: "Tour Buckingham Palace", time: 2, desire: 9 },
    { activity: "Walk across Tower Bridge", time: 1, desire: 6 },
    { activity: "Shopping on Oxford Street", time: 3, desire: 5 },
    { activity: "Visit St. Paul's Cathedral", time: 2, desire: 8 },
    { activity: "Watch a West End show", time: 3, desire: 9 },
    { activity: "Visit Camden Market", time: 2, desire: 7 }
  ];
  
   const twoDaysInterval = 32
  
   // grid for calculate activities that satisfies most desires
   let londonTripGrid = londonTrip.map(() => {
     return Array(twoDaysInterval).fill({ activity: null, desire: 0, time: 0 })
   })
  
  // itemIndex parameter used to access array avtivities 
 export function londonTripActivitiesToDo(Index) {
  // base case
  if(Index === londonTripGrid.length){
    return 
  }
  
  const {activity,time,desire} = londonTrip[Index]
  
  for (let cell = 0; cell < londonTripGrid.length; cell++) {
    // fill first grid  row directly
  if(Index === 0){
    londonTripGrid[Index][cell] = (time < cell) ? {activity,desire,time} : { activity: null, desire: 0, time: 0 }
  }
   else { // logic to fill all other rows
     if(time > cell){
      londonTripGrid[Index][cell] = londonTripGrid[Index -1][cell]
     }
     else if (time < cell){
        // get previous best activity
        let previousBest = londonTripGrid[Index -1 ][cell]
        // calculate the remaining time by subtracting current activity time from cell
        let remainingTimeSlot = londonTripGrid[Index -1][cell - time]
        // check if current activity desire added to remaining Time is greater than desire of previous activity
        if (remainingTimeSlot.desire + desire > previousBest.desire){
            // if so, store the current activity in current grid cell
          londonTripGrid[Index][cell] = {activity,desire:remainingTimeSlot.desire + desire,time}
        }
        else{
            // otherwise store previous best activity that satisfy most desire in grid cell
          londonTripGrid[Index][cell] = previousBest
        }
        // let newDesire = remainingTimeSlot.desire + desire
        // londonTripGrid[Index][cell] = (newDesire > previousBest.desire) ? {activity,desire:newDesire,time} : previousBest
        
      }
   }
  }
  londonTripActivitiesToDo(Index +1)
  }
  
  
  console.log(londonTripGrid)
  console.log(londonTripActivitiesToDo(0))