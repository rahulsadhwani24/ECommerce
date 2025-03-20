import { useEffect, useState } from "react"

let arrayOfProductsInBag = [];
export function AddToBagCustomUseState() {
    const [getProduct, setProduct] = useState([])
    useEffect(() => {
        if(getProduct === "empty"){
            arrayOfProductsInBag.length = 0
            return;
        }
        if(getProduct.length > 0){
            arrayOfProductsInBag.length = 0
            getProduct.forEach(item => { arrayOfProductsInBag.push(item);})
        }
        if(getProduct.id !== undefined){ arrayOfProductsInBag.push(getProduct) }
        arrayOfProductsInBag = arrayOfProductsInBag.filter((o, index, arr) => arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index)
    })
    return [arrayOfProductsInBag, setProduct]
}