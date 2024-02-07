

// simple logic leap Year// 100% aquret noy
// year will be a leap year if the year is divisible by 4
function isLeapYear(year){
  if(year % 4===0){

    return true;
  }
  else {

    return false
  }
}

 const islipi=isLeapYear(2052);
//   console.log(islipi);


// 1.those year that is  not divisible by 100 and if the  year divisible by 4:
 // than will be a leap year .
 //2. if the year is divisible by 400,then it is leap year
 //3. else is e not e leap year.


   function isLeapYear2(year){
    if(year % 100 !==0 && year % 4===0){

        return true;
    }
    else if(year % 400===0 ){
        return true;
    
    }  
   
      else {

          return false;
      }   
    
    
   }

     const isLeap=isLeapYear2(2100);
     const isLeap2=isLeapYear2(2400);
     const isLeap3=isLeapYear2(1900);
     const isLeap4=isLeapYear2(2052);

     console.log(isLeap,isLeap2,isLeap3,isLeap4);


