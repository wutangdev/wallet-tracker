import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Task } from "../../interfaces";
import { Wallet } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const WalletRoute: React.FC = () => {
  const wallets = useAppSelector((state) => state.wallets.wallets);
  // const directories = useAppSelector((state) => state.tasks.directories);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.title}"`,
    params.title ? params.title + " wallet" : ""
  );

  const [currentWallet, setCurrentWallet] = useState<
    Wallet[]
  >([]);

  useEffect(() => {
    const walletFilter = wallets.filter((wallet: Wallet) => wallet.title === params.title);
    setCurrentWallet(walletFilter);
  }, [navigate, params.title]);

  return (
    <LayoutRoutes
      title={`${params.title}`}
      wallet={currentWallet}
      // wallet={currentWallet}
      // wallet={params}
      // tasks={tasksInCurrentDirectory}
    />
  );
};

export default WalletRoute;
