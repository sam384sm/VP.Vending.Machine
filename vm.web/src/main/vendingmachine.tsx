import {useState } from "react"
import CoinInsert from "./CoinInsert";

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

    return (       
        <div className='container'>
        <p>current credit: {credit}</p>
        <p>returned coins: {returnCoin}</p>
        <div className='row'>
            <div className='col-4'>   
                <CoinInsert addCredit={addCredit} addReturn={addReturnedCoin}/>                    
            </div>
        </div>
      </div>
    )
}

export default VendingMachine;