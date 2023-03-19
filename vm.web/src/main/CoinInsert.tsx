import { useState } from "react";
import { coinProps } from "./coinProps";

const CoinInsert = (Props: coinProps)  => {
    const [newCoin, setNewCoin] = useState("");
    
    const validCoins = new Map<string, number>([
        ["1p", 0.01],
        ["2p", 0.02],
        ["5p", 0.05],
        ["10p", 0.10],
        ["20p", 0.20],
        ["50p", 0.50],
        ["£1", 1.00],
        ["£2", 2.00],
    ]);

    const addNewCoin = () => {
        if (validCoins.has(newCoin)){
            Props.addCredit(validCoins.get(newCoin) ?? 0);
        } else {
            Props.addReturn(newCoin);
        }        
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
        </div>
    )

}

export default CoinInsert;
