import {useState } from "react"
import CoinInsert from "./CoinInsert";
import ProductList from "./ProductList";
import { currencyFormatter } from "../config";

const VendingMachine = () => {
    const [credit, setCurrentCredit] = useState(0);    
    const [returnCoin, setReturns] = useState("");

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

    return (       
        <div className='container'>
        <p>current credit: {currencyFormatter.format(credit)}</p>
        <p>returned coins: {returnCoin}</p>
        <div className='row'>
            <div className='col-4'>   
                <CoinInsert addCredit={addCredit} addReturn={addReturnedCoin} takeCoins={takeCoins} resetCredit={resetCredit} currentCredit={credit}/>                    
            </div>
            <div className='col-8'>
                <ProductList resetCoins={resetCredit} addReturn={addReturnedCoin} currentCredit={credit} />
            </div>
        </div>
      </div>
    )
}

export default VendingMachine;