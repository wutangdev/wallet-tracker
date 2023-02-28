import React from "react";
import { Task } from "../../../interfaces";
import { Wallet } from "../../../interfaces";
import { Link } from "react-router-dom";
import { NormalTxObject } from "../../../interfaces";
import InfosTask from "./InfosTask";
import ActionsTaskItem from "./ActionsTaskItem";

// interface NormalTxObject {
//   chain: string;
//   explorer: string;
//   normalTxs: {
//     blockHash: string;
//     blockNumber: string;
//     confirmations: string;
//   }[];
//   address: string;  
// }

const TaskItem: React.FC<{ normalTxObj: NormalTxObject }> = ({
  normalTxObj
}) => {
  console.log(normalTxObj.normalTxs)



  return (
    <>
      <li key={normalTxObj.chain}>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent sm:h-32`}
        >
          <h1>{normalTxObj.chain} Normal Transactions</h1>


        {normalTxObj.normalTxs.map((tx, index) => (
          <ul>
            <a href={`${normalTxObj.explorer}/tx/${tx.hash}`}>
            <li className="flex justify-between">
              {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()} 
              
              <div className="text-right">
              {(parseInt(tx.value)/ 10 ** 18).toFixed(2) || '0'} {normalTxObj.chain}
              </div>               
            </li>
            </a>
            
            {/* <li>
              {tx.value} {normalTxObj.chain}
            </li>
            
            <li>
              confirmations: {tx.from}
            </li> */}
          </ul>

        ))}
        </article>
      </li>
      
    </>
  );
};

export default React.memo(TaskItem);
