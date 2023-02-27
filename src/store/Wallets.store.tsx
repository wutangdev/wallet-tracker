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
    address: '0x36f88584425679b3Ad54AaAf4b38Ac085507698E',
    title: 'FullyVoxxed',
    description: 'wallet of fullyvoxxed',
  },
  {
    id:'1',
    address: '0x255a3D56b819Bd30A25237Aa8599afa2D700AB91',
    title: 'Leeks',
    description: 'wallet of leeks',
  },
];

// const getSavedDirectories = (): string[] => {
//   let dirList: string[] = [];
//   if (localStorage.getItem("directories")) {
//     dirList = JSON.parse(localStorage.getItem("directories")!);
//     const mainDirExists = dirList.some((dir: string) => dir === "Main");
//     if (!mainDirExists) {
//       dirList.push("Main");
//     }
//   } else {
//     dirList.push("Main");
//   }

//   if (localStorage.getItem("wallets")) {
//     const savedWalletsList = JSON.parse(localStorage.getItem("wallets")!);
//     let dirNotSaved: string[] = [];
//     savedWalletsList.forEach((wallet: Wallet) => {
//       if (!dirList.includes(wallet.dir)) {
//         if (!dirNotSaved.includes(wallet.dir)) {
//           dirNotSaved.push(wallet.dir);
//         }
//       }
//     });
//     dirList = [...dirList, ...dirNotSaved];
//   }
//   return dirList;
// };

const initialState: {
  wallets: Wallet[];
  // directories: string[];
} = {
  wallets: localStorage.getItem("wallets")
    ? JSON.parse(localStorage.getItem("wallets")!)
    : defaultWallets,
  // directories: getSavedDirectories(),
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
    // markAsImportant(state, action: PayloadAction<string>) {
    //   const newWalletFavorited = state.wallets.find(
    //     (wallet) => wallet.id === action.payload
    //   );
    //   newWalletFavorited!.important = !newWalletFavorited!.important;
    // },
    editWallet(state, action: PayloadAction<Wallet>) {
      const walletId = action.payload.id;

      const newWalletEdited: Wallet = state.wallets.find(
        (wallet: Wallet) => wallet.id === walletId
      )!;
      const indexWallet = state.wallets.indexOf(newWalletEdited);
      state.wallets[indexWallet] = action.payload;
    },
    // toggleWalletCompleted(state, action: PayloadAction<string>) {
    //   const walletId = action.payload;

    //   const currWallet = state.wallets.find((wallet) => wallet.id === walletId)!;

    //   currWallet.completed = !currWallet.completed;
    // },
    deleteAllData(state) {
      state.wallets = [];
      // state.directories = ["Main"];
    },
    // createDirectory(state, action: PayloadAction<string>) {
    //   const newDirectory: string = action.payload;
    //   const directoryAlreadyExists = state.directories.includes(newDirectory);
    //   if (directoryAlreadyExists) return;
    //   state.directories = [newDirectory, ...state.directories];
    // },
    // deleteDirectory(state, action: PayloadAction<string>) {
    //   const dirName = action.payload;

    //   state.directories = state.directories.filter((dir) => dir !== dirName);
    //   state.wallets = state.wallets.filter((wallet) => wallet.dir !== dirName);
    // },
    // editDirectoryName(
    //   state,
    //   action: PayloadAction<{ newDirName: string; previousDirName: string }>
    // ) {
    //   const newDirName: string = action.payload.newDirName;
    //   const previousDirName: string = action.payload.previousDirName;
    //   const directoryAlreadyExists = state.directories.includes(newDirName);
    //   if (directoryAlreadyExists) return;

    //   const dirIndex = state.directories.indexOf(previousDirName);

    //   state.directories[dirIndex] = newDirName;
    //   state.wallets.forEach((wallet) => {
    //     if (wallet.dir === previousDirName) {
    //       wallet.dir = newDirName;
    //     }
    //   });
    // },
  },
});

export const walletsActions = walletsSlice.actions;
export default walletsSlice.reducer;

export const walletsMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.log(1)
    const nextAction = next(action);
    // const actionChangeOnlyDirectories =
    //   walletsActions.createDirectory.match(action);

    // const isADirectoryAction: boolean = action.type
    //   .toLowerCase()
    //   .includes("directory");

    if (action.type.startsWith("wallets/") && action.type) {
      const walletsList = store.getState().wallets.wallets;
      localStorage.setItem("wallets", JSON.stringify(walletsList));
    }
    // if (action.type.startsWith("wallets/") && isADirectoryAction) {
    //   const dirList = store.getState().wallets.directories;
    //   localStorage.setItem("directories", JSON.stringify(dirList));
    // }

    // if (action.type.startsWith("wallets/") ) {
    //   const walletsList = store.getState().wallets.wallets;
    //   localStorage.setItem("wallets", JSON.stringify(walletsList));
    // }

    // if (walletsActions.addNewWallet.match(action)) {
    //   console.log(2)
    //   const walletsList = store.getState().wallets.wallets;
    //   localStorage.setItem("wallets", JSON.stringify(walletsList));
    // }

    if (walletsActions.deleteAllData.match(action)) {
      localStorage.removeItem("wallets");
      // localStorage.removeItem("directories");
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
