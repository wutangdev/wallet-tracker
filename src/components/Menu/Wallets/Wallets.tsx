import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import ContentWallets from "./ContentWallets";

const Wallets: React.FC<{ classActive: string }> = ({ classActive }) => {
  const [isWalletsOpen, setIsWalletsOpen] = useState<boolean>(true);

  const toggleWalletsOpen = () => {
    setIsWalletsOpen((prevState) => !prevState);
  };

  return (
    <div className="py-4">
      <button
        className={`flex items-center w-full mx-4 mb-2 ${
          isWalletsOpen ? "dark:text-slate-200" : ""
        }`}
        onClick={toggleWalletsOpen}
      >
        <Arrow
          className={`w-3 h-3 mr-2 rotate-90 transition ${
            isWalletsOpen ? "rotate-180" : ""
          }`}
        />
        Wallets
      </button>
      <div className={isWalletsOpen ? "visible" : "hidden"}>
        <ContentWallets classActive={classActive} />
      </div>
    </div>
  );
};

export default Wallets;
