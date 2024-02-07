
function inchToFeet(inch){
 const feet=inch/12;
 return feet;
      
}

 const shuvoHight=inchToFeet(75);
//   console.log(shuvoHight);



function inchToFeet2(inch){
   const feetfraction=inch / 12;
   const feetNumber=parseInt(feetfraction);
   const inchRemaining= inch % 12;
   const result=feetNumber+ ' ft ' +inchRemaining+ ' inch. '
   return result;

}
  const shuvoHight2=inchToFeet2(75);
//   console.log(shuvoHight2);



 function mileToKillometer(mile){
   const kilo=mile*1.60934;
   return kilo;

 }


const destination = mileToKillometer(10);

//  console.log(destination);



 function kiloMeterToMiles(kilo){
    const mile=kilo*0.621371;
    return mile;
 }

 const miles=kiloMeterToMiles(10);
  console.log(miles);