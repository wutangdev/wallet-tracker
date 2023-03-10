export interface Wallet {
  title: string;
  address: string;
  description: string;
  id: string;
}

export const chains = [
  {
  chain: 'Binance Smart Chain',
  ticker: 'BSC',
  explorer: 'https://bscscan.com',
  explorerApi: 'https://api.bscscan.com/api',
  apiKey: 'HT6AWA46V79T7X79A529JEZJ8GP6UP9HQ3',
  },
  {
  chain: 'Ethereum',
  ticker: 'ETH',
  explorer: 'https://etherscan.io',
  explorerApi: 'https://api.etherscan.io/api',
  apiKey: 'Y7GGGMTD67SW7DJEMXPEA3PHWCJS3DWX94',
  },
  {
  chain: 'Polygon',
  ticker: 'MATIC',
  explorer: 'https://polygonscan.com',
  explorerApi: 'https://api.polygonscan.com/api',
  apiKey: 'F3KKI5PK9MX7C4UZSV3RGG4IF9Y6ZGBS9W',
  },
];

export interface BalanceObject {
  chain: string;
  explorer: string;
  explorerApi: string;
  balance: string;
  address: string;
}

export interface NormalTxObject {
  chain: string;
  explorer: string;
  explorerApi: string;
  normalTxs: {
    hash: string;
    timeStamp: string;
    value: string;
    from: string;
  }[];
  address: string;  
}

export interface InternalTxObject {
  chain: string;
  explorer: string;
  explorerApi: string;
  internalTxs: {
    hash: string;
    timeStamp: string;
    value: string;
    from: string;
  }[];
  address: string;  
}