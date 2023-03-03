import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {

  useDescriptionTitle("Wallet Tracker", "Wallet Tracker");
  return <>
  <section>
      <div className=" my-5 sm:my-8">
        <h1 className="font-medium text-center sm:text-left md:text-2xl text-lg dark:text-slate-200 flex">
          Wallet Tracker
        </h1>
      </div>
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 transition shadow-lg shadow-slate-300 dark:bg-slate-800 dark:shadow-transparent w-fit flex`}
        >
          <p>Simple Wallet Tracker app to monitor transactional events on crypto wallets. <br></br>
          View transactions and balances on multiple wallets across multiple chains from one place. <br></br>
          More chains coming soon. </p>
        </article>
      
    </section>
  </>;
};

export default Home;
