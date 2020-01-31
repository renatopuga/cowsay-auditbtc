//Inicio
const decimals = 18;                
const ether = 10 ** decimals;
const addressZero = 0x0000000000000000000000000000000000000000

/*
ganache-cli -i 1001 -e 1000 -a 12 -m "disorder volume claim joke gloom mechanic crush scan enough shock satoshi sword"
*/

const parseAccounts = (list) => {
  return {
    owner1: list[0],
    owner2: list[1],
    owner3: list[2],
    owner4: list[3],
    owner5: list[4],
    nonowner1: list[5],
    nonowner2: list[6]
  };
};

const info1 = 'Informacao 1'
const info2 = 'Informacao 2'

module.exports = { decimals, ether, addressZero, parseAccounts, info1, info2 }

//Fim