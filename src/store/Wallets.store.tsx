import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Wallet } from "../interfaces";

const defaultWallets: Wallet[] = [
  {
    id:'0',
    address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
    title: 'VitaliksWallet',
    description: 'Wallet belonging to Vitalik Buterin',
  },
];

const initialState: {
  wallets: Wallet[];
} = {
  wallets: localStorage.getItem("wallets")
    ? JSON.parse(localStorage.getItem("wallets")!)
    : defaultWallets,
};

const walletsSlice = createSlice({
  name: "wallets",
  initialState: initialState,
  reducers: {
    addNewWallet(state, action: PayloadAction<Wallet>) {
      state.wallets = [action.payload, ...state.wallets];
    },
    removeWallet(state, action) {
      const newWalletsList = state.wallets.filter(
        (wallet) => wallet.id !== action.payload
      );
      state.wallets = newWalletsList;
    },
    editWallet(state, action: PayloadAction<Wallet>) {
      const walletId = action.payload.id;

      const newWalletEdited: Wallet = state.wallets.find(
        (wallet: Wallet) => wallet.id === walletId
      )!;
      const indexWallet = state.wallets.indexOf(newWalletEdited);
      state.wallets[indexWallet] = action.payload;
    },
    deleteAllData(state) {
      state.wallets = [];
    },
  },
});

export const walletsActions = walletsSlice.actions;
export default walletsSlice.reducer;

export const walletsMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const nextAction = next(action);

    if (action.type.startsWith("wallets/") && action.type) {
      const walletsList = store.getState().wallets.wallets;
      localStorage.setItem("wallets", JSON.stringify(walletsList));
    }

    if (walletsActions.deleteAllData.match(action)) {
      localStorage.removeItem("wallets");
      localStorage.removeItem("darkmode");
    }

    if (walletsActions.removeWallet.match(action)) {
      console.log(JSON.parse(localStorage.getItem("wallets")!));
      if (localStorage.getItem("wallets")) {
        const localStorageWallets = JSON.parse(localStorage.getItem("wallets")!);
        if (localStorageWallets.length === 0) {
          localStorage.removeItem("wallets");
        }
      }
    }
    return nextAction;
  };
