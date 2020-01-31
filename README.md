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
```

### Após editar e criar os arquivos de código abra dois terminais:

>### Primeiro Terminal

```bash
ganache-cli
```

>### Segundo Terminal

```bash
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
 
 ### Instalando e Rodando o slither
 
 * install com python3
 
 ```bash
 pip3 install slither-analyzer
 ```
 
 * Rodando
 
 ```bash
 # entrar no projeto
 cd ownerapp
 
 # rodando o slither
 slither .
  
 'truffle.cmd compile --all' running (use --truffle-version truffle@x.x.x to use specific version)

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Ownerapp.sol
> Artifacts written to C:\ETH\cowsay-auditbtc\ownerapp\build\contracts
> Compiled successfully using:
   - solc: 0.5.11+commit.c082d0b4.Emscripten.clang


INFO:Detectors:
Different versions of Solidity is used in :
        - Version used: ['>=0.4.21<0.7.0', '^0.5.11']
        - >=0.4.21<0.7.0 (Migrations.sol#1)
        - ^0.5.11 (Ownerapp.sol#2)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used
INFO:Detectors:
Pragma version>=0.4.21<0.7.0 (Migrations.sol#1) allows old versions
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity
INFO:Detectors:
Variable Migrations.last_completed_migration (Migrations.sol#5) is not in mixedCase
Parameter Ownerap.changeMinApproval(uint8)._minApproval (Ownerapp.sol#54) is not in mixedCase
Parameter Ownerap.addOwner(address)._address (Ownerapp.sol#67) is not in mixedCase
Parameter Ownerap.delOwner(address)._address (Ownerapp.sol#74) is not in mixedCase
Parameter Ownerap.checkApproval(address)._address (Ownerapp.sol#119) is not in mixedCase
Parameter Ownerap.setInfo(string)._info (Ownerapp.sol#136) is not in mixedCase
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
INFO:Detectors:
setCompleted(uint256) should be declared external:
        - Migrations.setCompleted(uint256) (Migrations.sol#15-17)
changeMinApproval(uint8) should be declared external:
        - Ownerap.changeMinApproval(uint8) (Ownerapp.sol#54-60)
addOwner(address) should be declared external:
        - Ownerap.addOwner(address) (Ownerapp.sol#67-72)
delOwner(address) should be declared external:
        - Ownerap.delOwner(address) (Ownerapp.sol#74-81)
doApproval() should be declared external:
        - Ownerap.doApproval() (Ownerapp.sol#87-90)
cancelApproval() should be declared external:
        - Ownerap.cancelApproval() (Ownerapp.sol#92-100)
resetAllApproval() should be declared external:
        - Ownerap.resetAllApproval() (Ownerapp.sol#103-105)
checkApproval(address) should be declared external:
        - Ownerap.checkApproval(address) (Ownerapp.sol#119-122)
listApproval() should be declared external:
        - Ownerap.listApproval() (Ownerapp.sol#125-127)
countApproval() should be declared external:
        - Ownerap.countApproval() (Ownerapp.sol#130-132)
setInfo(string) should be declared external:
        - Ownerap.setInfo(string) (Ownerapp.sol#136-139)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-as-external
INFO:Slither:. analyzed (2 contracts with 41 detectors), 19 result(s) found
INFO:Slither:Use https://crytic.io/ to get access to additional detectors and Github integration
 ```
 
 

