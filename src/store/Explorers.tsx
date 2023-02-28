import React, { useState } from "react";
import axios from "axios";
import { text } from "stream/consumers";


export const checkBalance = async (address:string, explorer:string, apiKey:string) => {
    try {
      const response = await axios.get(
        `${explorer}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`
      );
      const balanceWei = parseInt(response.data.result);
      const balanceEth = balanceWei / 10 ** 18;
      return balanceEth;
    } catch (error) {
      console.error(error);
    }
  };

  export const checkNormalTx = async (address:string, explorerApi:string, apiKey:string) => {
    try {
      const response = await axios.get(
        `${explorerApi}?module=account&action=txlist&address=${address}&startblock=0&endblock=latest&page=1&offset=6&sort=desc&apikey=${apiKey}`
      );
      const normalTxData = response.data.result;
      console.log(response.data)
      console.log(normalTxData)
      return normalTxData;
    } catch (error) {
      console.error(error);
    }
  };

  export const checkInternalTx = async (address:string, explorerApi:string, apiKey:string) => {
    try {
      const response = await axios.get(
        `${explorerApi}?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=latest&page=1&offset=6&sort=desc&apikey=${apiKey}`
      );
      const internalTxData = response.data.result;
      console.log(response.data)
      console.log(internalTxData)
      return internalTxData;
    } catch (error) {
      console.error(error);
    }
  };