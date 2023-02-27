import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Directory from "../Routes/Directory";
import WalletRoute from "../Routes/Wallet"
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";
import HeaderWallets from "./HeaderWallets";

const WalletsSection: React.FC = () => {
  return (
    <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-10/12 ml-auto mr-0 min-h-screen">
      <HeaderWallets />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/today" element={<TodaysTasks />} />
        <Route path="/important" element={<ImportantTasks />} />
        <Route
          path="/completed"
          element={<DoneTasks done={true} title="Completed tasks" />}
        />
        <Route
          path="/uncompleted"
          element={<DoneTasks done={false} title="Uncompleted tasks" />}
        />
        <Route path="/results" element={<SearchResults />} /> */}
        <Route path="/wallet/:title" element={<WalletRoute />} />
        {/* <Route path="/task/:taskId" element={<TaskOnly />} />
        <Route path="*" element={<Navigate to="" />} /> */}
      </Routes>
    </main>
  );
};

export default WalletsSection;
