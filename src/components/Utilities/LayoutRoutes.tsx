import React, { useState, useEffect } from "react";
import { Task } from "../../interfaces";
import { Wallet, chains, BalanceObject, NormalTxObject } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import useSortTasks from "../hooks/useSortTasks";
import ButtonsSort from "../WalletSection/ButtonsSort";
import TaskItem from "../WalletSection/TaskItem/TaskItem";
import { checkBalance, checkNormalTx } from "../../store/Explorers";
import { ReactComponent as External } from "../../assets/external.svg"

type Props = {
  title: string;
  wallet: Wallet[]
  // wallet: string;
  // tasks: Task[] | [];
};

const LayoutRoutes: React.FC<Props> = ({ title, wallet }) => {
  // const [isListInView1, setIsListInView1] = useState<boolean>(false);  
  
  const currentWallet = wallet[0];
  
  const [balances, setBalances] = useState<BalanceObject[]>();
  const [normalTxs, setNormalTxs] = useState<NormalTxObject[]>();

  useEffect(() => {
    const handleCheckBalances = async () => {
      if (!currentWallet) {
        return; // add a check for undefined currentWallet
      }
      const balancePromises = chains.map((chain, i) => 
        checkBalance(currentWallet.address, chain.explorerApi, chain.apiKey).then((balance) => ({
          chain: chain.ticker,
          explorerApi: chain.explorerApi,
          balance: balance?.toFixed(2) || '0',
          address: currentWallet.address,
        }))      
      );
      const balancesArray: BalanceObject[] = await Promise.all(balancePromises);
      setBalances(balancesArray);
      console.log(balances)
    };
    handleCheckBalances();
  }, [currentWallet]);
  

  useEffect(() => {
    const handleCheckNormalTx = async () => {
      if (!balances) {
        return; // add a check for undefined currentWallet
      }
      const normalTxsPromises = chains.map((chain, i) => 
        checkNormalTx(currentWallet.address, chain.explorerApi, chain.apiKey).then((normalTxs) => ({
          chain: chain.ticker,
          explorer: chain.explorer,
          explorerApi: chain.explorerApi,
          normalTxs: normalTxs,
          address: currentWallet.address,
        }))      
      );
      const normalTxsArray: NormalTxObject[] = await Promise.all(normalTxsPromises);
      setNormalTxs(normalTxsArray);
      console.log(normalTxsArray)
    };
    handleCheckNormalTx();
    console.log(normalTxs)
  }, [balances]);

  

  const dispatch = useAppDispatch();

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200 flex">
        {title}
      </h1>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent w-fit flex`}
        >
          {balances &&
          Object.entries(balances).map(([chain, balanceObj]) => (
            <div className="flex mx-3" key={chain}>
              <p>{balanceObj.chain}: {balanceObj.balance}</p>
              <a className="mx-0 my-auto pl-1" href={`${balanceObj.explorerApi}/address/${balanceObj.address}`}>
                <External className="w-5 h-5" />
              </a>
            </div>
          ))}
          {!balances &&
            <p>Loading...</p>
          }
        </article>
      <ul
        className={'mt-4 grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'}
      >
        {normalTxs &&
          Object.entries(normalTxs).map(([key, value]) => (
            <TaskItem key={key} normalTxObj={value} />
          ))
        }
        {!normalTxs &&        
          <p>Loading...</p>
        }
        {/* {sortedTasks.map((task) => (
          <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
        ))} */}
      </ul>
    </section>
  );
};

export default React.memo(LayoutRoutes);
