import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import { walletsActions } from "../../../store/Wallets.store";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import ModalConfirm from "../../Utilities/ModalConfirm";
import ModalDirectory from "../../Utilities/ModalDirectory";
import ModalCreateWallet from "../../Utilities/ModalWallet";
import { Wallet } from "../../../interfaces";

const ItemWallet: React.FC<{ wallet: any, classActive: string, }> = ({
  wallet,
  classActive,
}) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const [modalIsShown, setModalIsShown] = useState<boolean>(false);

  const deleteWalletHandler = () => {
    dispatch(walletsActions.removeWallet(wallet.id));
  };

  const [modalEditWalletOpen, setModalEditWalletOpen] = useState<boolean>(false);

  const closeModalEditWallet = () => {
    setModalEditWalletOpen(false);
  };

  const openModalEditWallet = () => {
    setModalEditWalletOpen(true);
  };

  const editWalletHandler = (wallet: Wallet) => {
    dispatch(walletsActions.editWallet(wallet));
  };

  return (
    <>
      
      {modalEditWalletOpen && (
        <ModalCreateWallet
          onClose={closeModalEditWallet}
          wallet={wallet}
          nameForm="Edit task"
          onConfirm={editWalletHandler}
        />
      )}
      {modalIsShown && (
        <ModalConfirm
          onClose={() => setModalIsShown(false)}
          onConfirm={deleteWalletHandler}
          text="This wallet will be deleted."
        />
      )}
      <li
        className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${
          currentPath === "/wallet/" + wallet.title ? classActive : ""
        }`}
      >
        <NavLink
          to={`/wallet/${wallet.title}`}
          title={wallet.title}
          className="hover:text-cyan-600 dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]"
        >
          {wallet.title}
        </NavLink>

          <div className="ml-auto buttonsDir">
            <button
              title="edit wallet"
              onClick={() => setModalEditWalletOpen(true)}
            >
              <Edit className="w-5 h-5 mr-2" />
            </button>
            <button
              title="delete wallet"
              onClick={() => setModalIsShown(true)}
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
      </li>
    </>
  );
};

export default ItemWallet;
