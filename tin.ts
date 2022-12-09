//generate keypair from privatekey or secretkey

import { Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";

(async () => {
  const keypair = Keypair.fromSecretKey(
    bs58.decode(
      "65LAK6Wv2LsHLKH28fqUL2LrLfByk9r3rMHC7qqCcWfFRkxn8UGrEKgYd4gB9bXq5CwKAtqH86PhG2eXGLu91Q7c"
    )
  );
  console.log(keypair);
  
})();