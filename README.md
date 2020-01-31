# cowsay-auditbtc
Blockchain Security &amp; Auditing 

## Audit Tools

* https://github.com/crytic/slither


## Utilize o powershell como Administrador no processo de instalação:


 ```bash
# install truffle
npm install -g truffle

# install ganache-cli
npm install -g ganache-cli

# init
npm i

npm WARN ownerap@1.0.0 No description
npm WARN ownerap@1.0.0 No repository field.

audited 3 packages in 1.299s
found 0 vulnerabilities


# truffle compile
truffle compile


Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Ownerapp.sol
> Artifacts written to C:\ETH\cowsay-auditbtc\ownerapp\build\contracts
> Compiled successfully using:
   - solc: 0.5.11+commit.c082d0b4.Emscripten.clang


# truffle test

Using network 'development'.


Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Ownerapp.sol
> Artifacts written to C:\Users\LOGONR~1\AppData\Local\Temp\test-2020030-8644-xriu7r.wx7ro
> Compiled successfully using:
   - solc: 0.5.11+commit.c082d0b4.Emscripten.clang



  Contract: Ownerap
    Create - owner
response: true
      √ check if creator is owner at create
    Create - quant
      √ check if minApproval = 1 at create
      √ check if quantOwner = 1 at create

  Contract: Ownerap
    Approval
      √ owner can approve
      √ nononwer cannont doApproval (77ms)

  Contract: Ownerap
    AddOwner
      √ should emit event OwnerAdded when add new owner (282ms)


  6 passing (1s)

 ``` 
 
 

