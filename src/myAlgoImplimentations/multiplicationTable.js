// multiplication table
export let arrayForMultip = [1,2,3,4,5,6,7,.8,9,10]

export function multiplicationTable(array,index){
     if (array.length === index) {
      return {tables: []}
     }
     let nextTable = multiplicationTable(array,index +1)
     let currentTable = []
     for (let i = 0; i < array.length; i++) {
      currentTable.push(array[i] * array[index])
     }
     nextTable.tables.unshift(currentTable)
     return nextTable
}