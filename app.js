const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

let sum=0;
 let prime=""
 let primeArray=[];
  for(let i =0;i<numbers.length;i++){
      for(let j =2 ;j<numbers[i];j++){
       if(numbers[i]%j==0){
           break
       }
       else if(numbers[i]%j!=0 && j==numbers[i]-1){
           prime+=numbers[i]+" "
           primeArray.push(numbers[i])
           sum+=numbers[i]
       }
      }
  }
  console.log("primeNumbers--->",prime)
  console.log(primeArray)


  primeArray.sort((a,b)=>a-b)
  console.log("maximum prime number -->",primeArray[primeArray.length-1])
  console.log("minimum prime number -->",primeArray[0])

  console.log("Total sum of all prime numbers -->",sum)