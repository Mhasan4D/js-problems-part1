
// array has some duplicate Elements
// []

const biriyanikor=['abul','kabul','babul','dabul','abul','kabul','babul','dabul','bulbul',]

const numbers=[12,23,33,44,55,66,12,33,44,23,]

 
 function  noDuplicate(array){
 const unique=[];
  for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item);
     }

   }
   return unique;

 }

   const uniqueArray=noDuplicate(biriyanikor);
    console.log(uniqueArray);