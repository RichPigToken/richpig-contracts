#!/bin/sh

rm -r build/contracts/
rm out_matic_mainnet.txt
truffle deploy --network maticMainnet 2>&1 | tee out_matic_mainnet.txt
truffle run verify RichPigToken MasterChef --network maticMainnet

