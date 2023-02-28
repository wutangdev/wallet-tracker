import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ItemWallet from "./ItemWallet";

const ContentWallets: React.FC<{ classActive: string }> = ({
  classActive,
}) => {
  const wallets = useAppSelector((store) => store.wallets.wallets);

  const dispatch = useAppDispatch();

  return (
    <>

      <ul className="max-h-full overflow-auto">
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
