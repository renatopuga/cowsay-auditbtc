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

    /*
    */
   describe('Create - owner', function () {
        it('check if creator is owner at create', async() => {
            var response = await ownerap.owner(listAccounts.owner1)
            console.log ('response: ' + response)
            assert.equal(response, true, 'owner is wrong at create')
        }) 

        //O que mais deve ser verificado com o owner na criação do contrato?
    });
   
    describe('Create - quant', function () {
        it('check if minApproval = 1 at create', async() => {
            var response = await ownerap.minApproval()
            assert.equal(response, 1, 'minApproval is wrong at create')            
        })
        
        it('check if quantOwner = 1 at create', async() => {         
        })

        //O que mais deve ser verificado na criação do contrato?
    });    

})
//Fim