import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wallet } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const WalletRoute: React.FC = () => {
  const wallets = useAppSelector((state) => state.wallets.wallets);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `"${params.title}"`,
    params.title ? params.title : ""
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
    />
  );
};

export default WalletRoute;
