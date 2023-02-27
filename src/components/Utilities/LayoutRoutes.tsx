import React, { useState, useEffect } from "react";
import { Task } from "../../interfaces";
import { Wallet, chains } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import useSortTasks from "../hooks/useSortTasks";
import ButtonsSort from "../TasksSection/ButtonsSort";
import TaskItem from "../TasksSection/TaskItem/TaskItem";
import { checkBalance } from "../../store/Explorers";
import { ReactComponent as External } from "../../assets/external.svg"

type Props = {
  title: string;
  wallet: Wallet[]
  // wallet: string;
  // tasks: Task[] | [];
};

const LayoutRoutes: React.FC<Props> = ({ title, wallet }) => {
  // const [isListInView1, setIsListInView1] = useState<boolean>(false);

  const currentWallet = wallet[0]
  
  interface BalanceObject {
    chain: string;
    explorer: string;
    balance: string;
    address: string;
  }
  
  const [balances, setBalances] = useState<BalanceObject[]>();

  // useEffect(() => {
  //   const handleCheckBalances = async () => {
  //     const balancePromises = chains.map((chain) => checkBalance( currentWallet.address, chain.explorer, chain.apiKey));
  //     const balanceEthValues = await Promise.all(balancePromises);
  //     const balanceStrings = balanceEthValues.map((balance) => balance?.toFixed(2) || '0');
  //     const balancesObject = Object.fromEntries(chains.map((chain, i) => [chain.ticker, balanceStrings[i]]));
  //     setBalances(balancesObject);
  //     console.log(balances)
  //   };
  //   handleCheckBalances();
  //   console.log(balances)
  // }, [wallet]);

  useEffect(() => {
    const handleCheckBalances = async () => {
      const balancePromises = chains.map((chain, i) => 
        checkBalance( currentWallet.address, chain.explorer, chain.apiKey).then((balance) => ({
          chain: chain.ticker,
          explorer: chain.explorer,
          balance: balance?.toFixed(2) || '0',
          address: currentWallet.address,
        }))      
      );
      const balancesArray: BalanceObject[] = await Promise.all(balancePromises);
      setBalances(balancesArray);
      console.log(balances)
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
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200 flex">
        {title}
        {/* <a className="mx-0 my-auto pl-1" href={`https://etherscan.io/address/${wallet[0].address}`}>
          <External className="w-5 h-5" />
        </a> */}
      </h1>
      <div>
        
      </div>

      <div>
      {balances &&
        Object.entries(balances).map(([chain, balanceObj]) => (
          <div className="flex" key={chain}>
            <p>{balanceObj.chain}: {balanceObj.balance}</p>
            <a className="mx-0 my-auto pl-1" href={`${balanceObj.explorer}/address/${balanceObj.address}`}>
              <External className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
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
