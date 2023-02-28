import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  // const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize your tasks", "All tasks");
  // return <LayoutRoutes title="All tasks" tasks={tasks}></LayoutRoutes>;
  return <>
  <section>
      <div className=" my-5 sm:my-8">
        <h1 className="font-medium text-center sm:text-left md:text-2xl text-lg dark:text-slate-200 flex">
          Wallet Tracker
        </h1>
        <p>A simple tool to help monitor transactions on multiple wallets.  </p>
      </div>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 transition shadow-lg shadow-slate-300 dark:bg-slate-800 dark:shadow-transparent w-fit flex`}
        >
          <p>Just add a wallet and you can view recent transactions made on multiple chains from right here.</p>
        </article>
      
    </section>
  </>;
};

export default Home;
