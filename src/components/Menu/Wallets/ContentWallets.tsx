import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalDirectory from "../../Utilities/ModalDirectory";
import ItemWallet from "./ItemWallet";

const ContentWallets: React.FC<{ classActive: string }> = ({
  classActive,
}) => {
  const wallets = useAppSelector((store) => store.wallets.wallets);
  // const wallets = JSON.parse(walletsObject)
  // console.log(walletsObject)
  console.log(wallets)

  const dispatch = useAppDispatch();

  return (
    <>

      <ul className="max-h-36 overflow-auto">
        {wallets.map((wallet:any) => (
          <ItemWallet 
            key={wallet.id} 
            classActive={classActive} 
            wallet={wallet}  />
        ))}
      </ul>
    </>
  );
};

export default ContentWallets;
