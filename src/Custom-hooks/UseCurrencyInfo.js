// Hooks basically javascript function which returns some values in the form of Array

import { useEffect, useState } from "react";

// function hello(){
//     return ["hi",'Hook']
// }
function UseCurrencyInfo(currency) {
    //to get the currency data we need to call API
    //dont use fetch??
    //use useEffect for updating the currency data if some dependecies changes
    //also now we dont have to call API externally
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
             console.log(data);
             
    } , [currency])
    console.log(data);
    
    return data
}
export default UseCurrencyInfo;