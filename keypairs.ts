//generate publickey and secretkey from keypair

import { Keypair, PublicKey } from "@solana/web3.js";
import * as bip39 from 'bip39';
import * as bs58 from 'bs58';

//let keypair: Keypair = Keypair.generate();s
//console.log(keypair);

/*[
  253, 209, 191,  74, 139,  40, 192, 182,  70,  56, 155,
  111,  46, 158, 166,  46, 146, 132,  18,  60,  55,  84,
  142, 212, 207,  72, 126, 111, 224, 197, 234,   5,  44,
  121, 204,  15, 155, 212, 137,  48, 160,  60,  88,  94,
  241, 126,   6, 111, 140,  20, 105,  97,  19, 192,  16,
  167, 128, 252, 223, 189,  80, 218, 204, 251
]*/

let keypair = Keypair.fromSecretKey(Uint8Array.from([
  253, 209, 191,  74, 139,  40, 192, 182,  70,  56, 155,
  111,  46, 158, 166,  46, 146, 132,  18,  60,  55,  84,
  142, 212, 207,  72, 126, 111, 224, 197, 234,   5,  44,
  121, 204,  15, 155, 212, 137,  48, 160,  60,  88,  94,
  241, 126,   6, 111, 140,  20, 105,  97,  19, 192,  16,
  167, 128, 252, 223, 189,  80, 218, 204, 251
]));
console.log(keypair.publicKey.toBase58());

let keypairbs58 = bs58.encode(Uint8Array.from(
   [
    253, 209, 191,  74, 139,  40, 192, 182,  70,  56, 155,
    111,  46, 158, 166,  46, 146, 132,  18,  60,  55,  84,
    142, 212, 207,  72, 126, 111, 224, 197, 234,   5,  44,
    121, 204,  15, 155, 212, 137,  48, 160,  60,  88,  94,
    241, 126,   6, 111, 140,  20, 105,  97,  19, 192,  16,
    167, 128, 252, 223, 189,  80, 218, 204, 251
  ]));
  console.log("bs58: "+ keypairbs58);

  
  