import {useState } from "react"
import CoinInsert from "./CoinInsert";
import ProductList from "./ProductList";
import { currencyFormatter } from "../config";

const VendingMachine = () => {
    const [credit, setCurrentCredit] = useState(0);    
    const [returnCoin, setReturns] = useState("");
    const [dispensedItem, setDispensedItem] = useState("");

    const addCredit = (additionalCredit: number) => {
        setCurrentCredit(credit + additionalCredit);
    }

    const addReturnedCoin = (returnedCoin: string) => {
        const newReturns = returnCoin === "" ? returnedCoin : returnCoin + ", " + returnedCoin
        setReturns(newReturns);
    }

    const resetCredit = () => {
        setCurrentCredit(0);
    }

    const takeCoins = () =>
    {
        setReturns("");
    }

    const setDispenseItem = (item: string) => {
        setDispensedItem(item);
    }

    return (       
        <div className='container'>
        <p>current credit: {currencyFormatter.format(credit)}</p>
        <p>returned coins: {returnCoin}</p>
        <p>Product dispensed: {dispensedItem}</p>
        <div className='row'>
            <div className='col-4'>   
                <CoinInsert addCredit={addCredit} addReturn={addReturnedCoin} takeCoins={takeCoins} resetCredit={resetCredit} currentCredit={credit}/>                    
            </div>
            <div className='col-8'>
                <ProductList resetCredit={resetCredit} addReturn={addReturnedCoin} dispenseItem={setDispenseItem} currentCredit={credit} />
            </div>
        </div>
      </div>
    )
}

export default VendingMachine;