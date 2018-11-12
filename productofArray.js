const arr = [1,2,3,4];

function productOfArray(arr){
    let len = arr.length;
    if(len === 0){
      return 1;
    }
  
 
    let total = arr[0] * productOfArray(arr.splice(1));
    return total;
}  

console.log(productOfArray(arr));
