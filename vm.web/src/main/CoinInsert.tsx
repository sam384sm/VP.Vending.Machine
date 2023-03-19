import { useState } from "react";
import getMinimumCoins from "../helpers/MinCoinHelper";
import { coinProps } from "../helpers/PropsHelper";

const CoinInsert = (Props: coinProps)  => {
    const [newCoin, setNewCoin] = useState("");
    
    const validCoins = new Map<string, number>([
        ["£2", 2.00],
        ["£1", 1.00],
        ["50p", 0.50],        
        ["20p", 0.20],
        ["10p", 0.10],        
        ["5p", 0.05],        
        ["2p", 0.02],
        ["1p", 0.01],      
    ]);

    const addNewCoin = () => {
        if (validCoins.has(newCoin)){
            Props.addCredit(validCoins.get(newCoin) ?? 0);
        } else {
            Props.addReturn(newCoin);
        }        
    }

    const returnCoins = () => {
        Props.addReturn(getMinimumCoins(Props.currentCredit));
        Props.resetCredit();
    }

    const takeCoins = () => {
        Props.takeCoins();
    }

    return (
        <div>
            <h3>Enter coins</h3>
            <p>Valid coins include 1p, 2p, 5p, 10p, 20p, 50p, £1, £2</p>
            <input
                id="coinInput"
                className="h-100"
                type="text"
                onChange={(e) =>
                    setNewCoin(e.target.value)
                  }     
            >
            </input>
            <button className="btn btn-primary" onClick={addNewCoin}>
             Add
            </button>
            <button className="btn btn-primary" onClick={returnCoins}>
                return coins
            </button>
            <button className="btn btn-primary" onClick={takeCoins}>
                take returned coins``
            </button>
        </div>
    )

}

export default CoinInsert;
