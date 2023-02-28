import React from "react";
import { NormalTxObject } from "../../../interfaces";
import { ReactComponent as External } from "../../../assets/external.svg"

const NormTxItem: React.FC<{ normalTxObj: NormalTxObject }> = ({
  normalTxObj
}) => {

  return (
    <>
      <li key={normalTxObj.chain}>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 text-left transition shadow-lg shadow-slate-300 dark:bg-slate-800 dark:shadow-transparent h-min`}
        >
          <h1>{normalTxObj.chain} Normal Transactions</h1>


        {normalTxObj.normalTxs.map((tx, index) => (
          <ul>
            <li className="flex justify-between">
              {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()} 
              
              <div className="text-right flex">
                {(parseInt(tx.value)/ 10 ** 18).toFixed(2) || '0'} {normalTxObj.chain}                
                <a className="mx-0 my-auto pl-1" href={`${normalTxObj.explorer}/tx/${tx.hash}`}>
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

export default React.memo(NormTxItem);
