import React from "react";
import Menu from "./components/Menu/Menu";
import WalletsSection from "./components/WalletSection/WalletsSection"
import ModalCreateWallet from "./components/Utilities/ModalWallet";
import { Wallet } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { walletsActions } from "./store/Wallets.store";

const App: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const closeModalCreateWallet = () => {
    dispatch(modalActions.closeModalCreateWallet());
  };

  

  const createNewWalletHandler = (wallet: Wallet) => {
    dispatch(walletsActions.addNewWallet(wallet));
  };

  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
      {modal.modalCreateWalletOpen && (
        <ModalCreateWallet
          onClose={closeModalCreateWallet}
          nameForm="Add a wallet"
          onConfirm={createNewWalletHandler}
        />
      )}
      <Menu />
      <WalletsSection />
    </div>
  );
};

export default App;
