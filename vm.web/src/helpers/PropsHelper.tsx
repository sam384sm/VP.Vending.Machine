
export interface coinProps {
    addCredit: (additionalCredit: number) => void;
    addReturn: (returnedCoin: string) => void;
}

export interface productListProps {
    resetCoins: () => void;
    currentCredit: number;    
}