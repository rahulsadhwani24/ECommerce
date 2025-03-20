import { useEffect, useState } from "react"

let arrayOfProducts = [];
export function CustomProductUseState() {
    const [getProductt, setProductt] = useState([])
    useEffect(() => {
        if(getProductt === "empty"){
            arrayOfProducts.length = 0
            return;
        }
        if(getProductt.length > 0){
            arrayOfProducts.length = 0
            getProductt.forEach(item => { arrayOfProducts.push(item) })
        }
        if(getProductt.id !== undefined){ arrayOfProducts.push(getProductt) }
        arrayOfProducts = arrayOfProducts.filter((o, index, arr) => arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index)
    })
    return [arrayOfProducts, setProductt]
}