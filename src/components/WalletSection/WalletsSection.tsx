import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WalletRoute from "../Routes/Wallet";
import Home from "../Routes/Home";
import HeaderWallets from "./HeaderWallets";

const WalletsSection: React.FC = () => {
  return (
    <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-10/12 ml-auto mr-0 min-h-screen">
      <HeaderWallets />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet/:title" element={<WalletRoute />} />
      </Routes>
    </main>
  );
};

export default WalletsSection;
