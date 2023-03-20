
export interface coinProps {
    addCredit: (additionalCredit: number) => void;
    addReturn: (returnedCoin: string) => void;
    takeCoins: () => void;  
    resetCredit: () => void;
    currentCredit: number;  
}

export interface productListProps {
    resetCredit: () => void;
    addReturn: (returnedCoin: string) => void;
    dispenseItem: (item: string) => void;
    currentCredit: number;    
}