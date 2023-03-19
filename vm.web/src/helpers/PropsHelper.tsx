
export interface coinProps {
    addCredit: (additionalCredit: number) => void;
    addReturn: (returnedCoin: string) => void;
    takeCoins: () => void;  
    resetCredit: () => void;
    currentCredit: number;  
}

export interface productListProps {
    resetCoins: () => void;
    addReturn: (returnedCoin: string) => void;
    currentCredit: number;    
}