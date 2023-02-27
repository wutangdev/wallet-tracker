import React, { useState } from "react";
import axios from "axios";


export const checkBalance = async (address:string, explorer:string, apiKey:string) => {
    try {
      const response = await axios.get(
        `${explorer}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`
      );
      const balanceWei = parseInt(response.data.result);
      const balanceEth = balanceWei / 10 ** 18;
      console.log(balanceEth)
      return balanceEth;
    } catch (error) {
      console.error(error);
    }
  };