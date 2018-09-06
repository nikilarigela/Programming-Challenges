let arr = [1 ,1 ,1 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,2 ,4 ,4 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,1 ,2 ,4 ,0];
let ansArr = [];
let iterator = 0;
let index = 0;
let get3 = 3;

while(index + 14 < arr.length){
   if(iterator === 4){
    iterator = 0; 
    index = index + 1;
  }else {
    let total = findTotal(index);
    ansArr.push(total);
    iterator++;
  }
 
  index++;
}

function findTotal(index){
  let total = 0;
  
  for(let i = index;i < index+3;i++){
    total += arr[i];
  }
  total += arr[index + 7];
  for(let i = index+12;i <= index+14;i++){
    total += arr[i];
  }

  return total;
}
console.log(ansArr);

