import React from "react";
import { Task } from "../../../interfaces";
import { Wallet } from "../../../interfaces";
import { Link } from "react-router-dom";
import { InternalTxObject } from "../../../interfaces";
import InfosTask from "./InfosTask";
import ActionsTaskItem from "./ActionsTaskItem";
import { ReactComponent as External } from "../../../assets/external.svg"

const IntTxItem: React.FC<{ internalTxObj: InternalTxObject }> = ({
  internalTxObj
}) => {

  return (
    <>
      <li key={internalTxObj.chain}>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 text-left transition shadow-lg shadow-slate-300 dark:bg-slate-800 dark:shadow-transparent h-min`}
        >
          <h1>{internalTxObj.chain} Internal Transactions</h1>


        {internalTxObj.internalTxs.map((tx, index) => (
          <ul>
            <li className="flex justify-between">
              {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()} 
              
              <div className="text-right flex">
                {(parseInt(tx.value)/ 10 ** 18).toFixed(2) || '0'} {internalTxObj.chain}                
                <a className="mx-0 my-auto pl-1" href={`${internalTxObj.explorer}/tx/${tx.hash}`}>
                  <External className="w-3 h-3" />              
                </a>
              </div>               
            </li>
          </ul>

        ))}
        </article>
      </li>
      
    </>
  );
};

export default React.memo(IntTxItem);
