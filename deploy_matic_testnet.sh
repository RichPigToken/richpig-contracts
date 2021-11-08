#!/bin/sh

rm -r build/contracts/
rm out_matic_testnet.txt
truffle deploy --network maticTestnet 2>&1 | tee out_matic_testnet.txt
truffle run verify RichPigToken MasterChef --network maticTestnet

