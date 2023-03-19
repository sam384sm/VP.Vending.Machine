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
            <div className="row">
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
            </div>
            <div className="row m-1">
            <div className="col-4"><button className="btn btn-primary p-1 m-1 h-100 w-100" onClick={addNewCoin}>
             Add coinInput
            </button></div>
            <div className="col-4"><button className="btn btn-primary p-1 m-1 h-100 w-100" onClick={returnCoins}>
                return coins
            </button></div>
            <div className="col-4"><button className="btn btn-primary p-1 m-1 h-100 w-100" onClick={takeCoins}>
                take returned coins
            </button></div>
            </div>
            
        </div>
    )

}

export default CoinInsert;
