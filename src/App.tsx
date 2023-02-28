import React from "react";
import AccountData from "./components/AccountSection/AccountData";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import WalletsSection from "./components/WalletSection/WalletsSection"
import ModalCreateTask from "./components/Utilities/ModalTask";
import ModalCreateWallet from "./components/Utilities/ModalWallet";
import { Task } from "./interfaces";
import { Wallet } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { tasksActions } from "./store/Tasks.store";
import { walletsActions } from "./store/Wallets.store";

const App: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  // const closeModalCreateTask = () => {
  //   dispatch(modalActions.closeModalCreateTask());
  // };

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
      {/* <AccountData /> */}
    </div>
  );
};

export default App;
