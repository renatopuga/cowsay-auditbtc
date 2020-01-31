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

   

   describe('Approval', function () {

        it('owner can approve', async() => {
        })

        it('nononwer cannont doApproval', async() => {
            await truffleAssertions.reverts(ownerap.doApproval({from: listAccounts.nonowner1 }))
        })
    });

})
//Fim