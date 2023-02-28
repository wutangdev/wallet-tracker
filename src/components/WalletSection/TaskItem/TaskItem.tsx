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
    {/* <p>{normalTxObj.chain}</p>
    {normalTxObj &&
      Object.entries(normalTxObj).map(([key, value]) => (
        <div key={key}>
          <h3>{value.chain}</h3>
          <ul>
            {value.normalTxs.map((tx:any, index:any) => (
              <li key={index}>{tx.value}</li>
            ))}
          </ul>
        </div>
      ))
    } */}
      <li key={normalTxObj.chain}>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-row sm:h-32`}
        >
          <h1>{normalTxObj.chain}</h1>

          {/* {normalTxs &&
          Object.entries(normalTxs).map(([key, value]) => (
            <TaskItem key={key} normalTxObj={value} />
          ))
        } */}


        {normalTxObj.normalTxs.map((tx, index) => (
          <li key={index}>
            blockHash: {tx.blockHash}, blockNumber: {tx.blockNumber}, confirmations: {tx.confirmations}
          </li>
        ))}
        </article>
      </li>
    </>
  );
};

export default React.memo(TaskItem);
