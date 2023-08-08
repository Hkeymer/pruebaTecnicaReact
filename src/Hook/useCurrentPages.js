import { useState } from "react";


const useCurrentPages = (data,num=6) => {
    
    // We save the value of "current" in the state, initialized to 0;
    const [current, setCurrent] = useState(0);
    
    // We divide the array we receive by parameter through the method
    // .slice() and pass it the value of "current" as the first parameter, and
    // as second the current value + num;
    // to get the first num positions of the array;
    const page = data.slice(current,current + num);
  
    // We create a function called "nextPage", which is responsible for increasing
    // the value of "current" in increments of num, until "current" is equal to the number of positions in the
    // array;
   const nextPage = ()=> data.length > current + num && setCurrent(current + num)
    
    // We create a function called "prevPage", which is in charge of decreasing
    // the value of "current" by num by num, until current equals 0;
   const prevPage = ()=> current>0 && setCurrent(current - num)
  
   return [page, nextPage, prevPage];
}

export default useCurrentPages;