import { createContext, useState, useEffect } from "react";

const CountDownTimerContext = createContext();


export function CountDownTimerProvider ({children}) {
    
    const [publicSaleDate, setPublicSaleDate] = useState("1664038800")
    const [publicSaleRemainingTime, setPublicSaleRemainingTime] = useState("")
    

    const [preSaleDate, setPreSaleDate] = useState("1663952400")
    const [preSaleRemainingTime, setPreSaleRemainingTime] = useState("")
   

    const [isLoading, setIsloading] = useState(true);  

  useEffect(() => {
    setIsloading(true);
    setPublicSaleDate(new Date('September 22, 2022 18:00:00').getTime()/1000);
    if(Math.floor(publicSaleDate - Date.now() / 1000) > 0){
      setPublicSaleRemainingTime(Math.floor(publicSaleDate - Date.now() / 1000));
      setIsloading(false);
    }
    
  }, []);
  useEffect(() => {
    setIsloading(true);
    setPreSaleDate(new Date('September 21, 2022 18:00:00').getTime()/1000);
    if(Math.floor(preSaleDate - Date.now() / 1000) > 0 ){
      setPreSaleRemainingTime(Math.floor(preSaleDate - Date.now() / 1000));
    setIsloading(false);
    }
    
  }, []);

  useEffect(() => {
    if (publicSaleRemainingTime > 0) {
      var intervalId1 = setInterval(() => {
        setPublicSaleRemainingTime(publicSaleDate - Math.floor(Date.now() / 1000));
      }, 1000);
    }
    
    return () => {
      clearInterval(intervalId1);
    };
  }, [publicSaleRemainingTime])

  useEffect(() => {
    if (preSaleRemainingTime > 0) {
      var intervalId2 = setInterval(() => {
        setPreSaleRemainingTime(preSaleDate - Math.floor(Date.now() / 1000));
      }, 1000);
    }
    
    return () => {
      clearInterval(intervalId2);
    };
  }, [preSaleRemainingTime])

    
    return (
        <CountDownTimerContext.Provider value={{publicSaleRemainingTime, preSaleRemainingTime}}>
            {children}
        </CountDownTimerContext.Provider>
    )
}

export default CountDownTimerContext

