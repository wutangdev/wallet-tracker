import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import BtnAddWallet from "../Utilities/BtnAddWallet";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import avatar1 from "../../assets/avatar-1.jpg";
import SearchField from "./SearchField";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import Notification from "./Notification";

const HeaderWallets: React.FC = () => {
  const dispatch = useAppDispatch();

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}}`;

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
      {/* <SearchField /> */}
      <div className="text-center">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          To-do list
        </span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className="flex flex-1 justify-end">
        {/* <Notification /> */}
        <BtnAddWallet className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />
      </div>
    </header>
  );
};

export default HeaderWallets;
