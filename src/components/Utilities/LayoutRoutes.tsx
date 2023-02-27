import React, { useState, useEffect } from "react";
import { Task } from "../../interfaces";
import { Wallet, chains } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import useSortTasks from "../hooks/useSortTasks";
import ButtonsSort from "../TasksSection/ButtonsSort";
import TaskItem from "../TasksSection/TaskItem/TaskItem";
import { checkBalance } from "../../store/Explorers";

type Props = {
  title: string;
  wallet: Wallet[]
  // wallet: string;
  // tasks: Task[] | [];
};

const LayoutRoutes: React.FC<Props> = ({ title, wallet }) => {
  // const [isListInView1, setIsListInView1] = useState<boolean>(false);

  const currentWallet = wallet[0]
  const [balances, setBalances] = useState<string[]>();
  const address = currentWallet.address;

  useEffect(() => {
    const handleCheckBalances = async () => {
      const balancePromises = chains.map((chain) => checkBalance( currentWallet.address, chain.explorer, chain.apiKey));
      const balanceEthValues = await Promise.all(balancePromises);
      const balanceStrings = balanceEthValues.map((balance) => balance?.toFixed(2) || '0');
      setBalances(balanceStrings);
    };
    handleCheckBalances();
    console.log(balances)
  }, [wallet]);

  const dispatch = useAppDispatch();

  // const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  // const openModalHandler = () => {
  //   dispatch(modalActions.openModalCreateWallet());
  // };

  // const tasksTitle = `${title} (${tasks.length} ${
  //   tasks.length === 1 ? "task" : "tasks"
  // })`;

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
        {title}
      </h1>
      {/* <ButtonsSort
        isListInView1={isListInView1}
        setIsListInView1={setIsListInView1}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />
      <ul
        className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
          isListInView1
            ? "grid-cols-1"
            : "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
        }`}
      >
        {sortedTasks.map((task) => (
          <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
        ))}
        <li>
          <button
            onClick={openModalHandler}
            className={`border-2 border-slate-300
             text-slate-400 w-full rounded-lg
              border-dashed transition hover:bg-slate-300
               hover:text-slate-500
               dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
                 isListInView1 ? "h-20 sm:h-32" : "h-52 sm:h-64"
               }`}
          >
            Add new task
          </button>
        </li>
      </ul> */}
    </section>
  );
};

export default React.memo(LayoutRoutes);
