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
      console.log(balanceEth)
      return balanceEth;
    } catch (error) {
      console.error(error);
    }
  };


// normal tx
//   https://api.etherscan.io/api
//    ?module=account
//    &action=txlist
//    &address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC
//    &startblock=0
//    &endblock=99999999
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=YourApiKeyToken

// internal tx 
// https://api.etherscan.io/api
//    ?module=account
//    &action=txlistinternal
//    &address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
//    &startblock=0
//    &endblock=2702578
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=YourApiKeyToken

// erc-20 tx 
// https://api.etherscan.io/api
//    ?module=account
//    &action=tokentx
//    &contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2
//    &address=0x4e83362442b8d1bec281594cea3050c8eb01311c
//    &page=1
//    &offset=100
//    &startblock=0
//    &endblock=27025780
//    &sort=asc
//    &apikey=YourApiKeyToken

// erc721 tx 
// https://api.etherscan.io/api
//    ?module=account
//    &action=tokennfttx
//    &contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d
//    &address=0x6975be450864c02b4613023c2152ee0743572325
//    &page=1
//    &offset=100
//    &startblock=0
//    &endblock=27025780
//    &sort=asc
//    &apikey=YourApiKeyToken

// erc1155 tx 
// https://api.etherscan.io/api
//    ?module=account
//    &action=token1155tx
//    &contractaddress=0x76be3b62873462d2142405439777e971754e8e77
//    &address=0x83f564d180b58ad9a02a449105568189ee7de8cb
//    &page=1
//    &offset=100
//    &startblock=0
//    &endblock=99999999
//    &sort=asc
//    &apikey=YourApiKeyToken

// normal tx 
// https://api.bscscan.com/api
//    ?module=account
//    &action=txlist
//    &address=0xF426a8d0A94bf039A35CEE66dBf0227A7a12D11e
//    &startblock=0
//    &endblock=99999999
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=YourApiKeyToken

// internal tx 
// https://api.bscscan.com/api
//    ?module=account
//    &action=txlistinternal
//    &address=0x0000000000000000000000000000000000001004
//    &startblock=0
//    &endblock=2702578
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=YourApiKeyToken

// bep20 tx 
// https://api.bscscan.com/api
//    ?module=account
//    &action=tokentx
//    &contractaddress=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51
//    &address=0x7bb89460599dbf32ee3aa50798bbceae2a5f7f6a
//    &page=1
//    &offset=5
//    &startblock=0
//    &endblock=999999999
//    &sort=asc
//    &apikey=YourApiKeyToken

// bep721 tx 
// https://api.bscscan.com/api
//    ?module=account
//    &action=tokennfttx
//    &contractaddress=0x5e74094cd416f55179dbd0e45b1a8ed030e396a1
//    &address=0xcd4ee0a77e09afa8d5a6518f7cf8539bef684e6c
//    &page=1
//    &offset=100
//    &startblock=0
//    &endblock=999999999
//    &sort=asc
//    &apikey=YourApiKeyToken