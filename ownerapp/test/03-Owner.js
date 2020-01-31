//Inicio
const truffleAssertions = require('truffle-assertions');
const Ownerap = artifacts.require('Ownerap');

const helpers = require('./helpers');

const {
    decimals,
    ether,
    addressZero,
    info1,
    info2
  } = require('./helpers');


  contract('Ownerap', accounts => {

    let ownerap
    let listAccounts = helpers.parseAccounts(accounts);
  
    beforeEach('setup for each test', async () => {
        ownerap = await Ownerap.new({ from: listAccounts.owner1 })
    })

    describe('AddOwner', function () {

        it('should emit event OwnerAdded when add new owner', async () => {
            //console.log('listAccounts.owner1 ', listAccounts.owner1 );
            //console.log('listAccounts.owner2 ', listAccounts.owner2 );

            await truffleAssertions.passes(ownerap.doApproval({ from: listAccounts.owner1 }));
            const transaction = await ownerap.addOwner(listAccounts.owner2, { from: listAccounts.owner1 });
            //console.log(JSON.stringify(transaction));
            await truffleAssertions.eventEmitted(transaction, 'OwnerAdded', ev => ev._address === listAccounts.owner2);
        });        
    });

})
//Fim