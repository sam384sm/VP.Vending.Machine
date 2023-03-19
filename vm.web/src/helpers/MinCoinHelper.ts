const getMinimumCoins = (credit: number) => {
    let coinsToReturn = "";
    let creditToCheck = credit;
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

    for (let [key, value] of validCoins){
        const numOfType = Math.floor(creditToCheck / value);
        if (numOfType > 0){
            for (let i = 0; i < numOfType; i++) { 
                if (coinsToReturn === ""){
                    coinsToReturn = key;
                } else 
                {
                    coinsToReturn += "," + key;
                }
            }
            creditToCheck -= numOfType * value;    
        }
    }    
    return coinsToReturn;
}

export default getMinimumCoins;