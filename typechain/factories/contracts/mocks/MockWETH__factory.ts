/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockWETH,
  MockWETHInterface,
} from "../../../contracts/mocks/MockWETH";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601081526020016f09adec6d640aee4c2e0e0cac8408aa8960831b8152506040518060400160405280600581526020016409aae8aa8960db1b81525081600390816200006a919062000127565b50600462000079828262000127565b505050620001f3565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000ad57607f821691505b602082108103620000ce57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200012257600081815260208120601f850160051c81016020861015620000fd5750805b601f850160051c820191505b818110156200011e5782815560010162000109565b5050505b505050565b81516001600160401b0381111562000143576200014362000082565b6200015b8162000154845462000098565b84620000d4565b602080601f8311600181146200019357600084156200017a5750858301515b600019600386901b1c1916600185901b1785556200011e565b600085815260208120601f198616915b82811015620001c457888601518255948401946001909101908401620001a3565b5085821015620001e35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d0c80620002036000396000f3fe6080604052600436106100d65760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d71461022b578063a9059cbb1461024b578063d0e30db01461026b578063dd62ed3e1461027357600080fd5b806339509351146101c057806370a08231146101e057806395d89b411461021657600080fd5b806323b872dd116100b057806323b872dd146101645780632e1a7d4d14610184578063313ce567146101a457600080fd5b806306fdde03146100ea578063095ea7b31461011557806318160ddd1461014557600080fd5b366100e5576100e36102b9565b005b600080fd5b3480156100f657600080fd5b506100ff6102fa565b60405161010c9190610b3d565b60405180910390f35b34801561012157600080fd5b50610135610130366004610ba7565b61038c565b604051901515815260200161010c565b34801561015157600080fd5b506002545b60405190815260200161010c565b34801561017057600080fd5b5061013561017f366004610bd1565b6103a6565b34801561019057600080fd5b506100e361019f366004610c0d565b6103ca565b3480156101b057600080fd5b506040516012815260200161010c565b3480156101cc57600080fd5b506101356101db366004610ba7565b61043a565b3480156101ec57600080fd5b506101566101fb366004610c26565b6001600160a01b031660009081526020819052604090205490565b34801561022257600080fd5b506100ff610479565b34801561023757600080fd5b50610135610246366004610ba7565b610488565b34801561025757600080fd5b50610135610266366004610ba7565b610537565b6100e36102b9565b34801561027f57600080fd5b5061015661028e366004610c48565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102c33334610545565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461030990610c7b565b80601f016020809104026020016040519081016040528092919081815260200182805461033590610c7b565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b5050505050905090565b60003361039a818585610604565b60019150505b92915050565b6000336103b485828561075d565b6103bf8585856107ef565b506001949350505050565b6103d433826109dc565b604051339082156108fc029083906000818181858888f19350505050158015610401573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061039a9082908690610474908790610cb5565b610604565b60606004805461030990610c7b565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561052a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103bf8286868403610604565b60003361039a8185856107ef565b6001600160a01b03821661059b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610521565b80600260008282546105ad9190610cb5565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b03831661067f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b0382166106fb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146107e957818110156107dc5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610521565b6107e98484848403610604565b50505050565b6001600160a01b03831661086b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b0382166108e75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b038316600090815260208190526040902054818110156109765760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36107e9565b6001600160a01b038216610a585760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b03821660009081526020819052604090205481811015610ae75760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610521565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610750565b600060208083528351808285015260005b81811015610b6a57858101830151858201604001528201610b4e565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610ba257600080fd5b919050565b60008060408385031215610bba57600080fd5b610bc383610b8b565b946020939093013593505050565b600080600060608486031215610be657600080fd5b610bef84610b8b565b9250610bfd60208501610b8b565b9150604084013590509250925092565b600060208284031215610c1f57600080fd5b5035919050565b600060208284031215610c3857600080fd5b610c4182610b8b565b9392505050565b60008060408385031215610c5b57600080fd5b610c6483610b8b565b9150610c7260208401610b8b565b90509250929050565b600181811c90821680610c8f57607f821691505b602082108103610caf57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103a057634e487b7160e01b600052601160045260246000fdfea2646970667358221220c67e5bf4d579770d4d0341c06743da1614eb064f92ef551c1c86f333dd5818d664736f6c63430008110033";

type MockWETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockWETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockWETH__factory extends ContractFactory {
  constructor(...args: MockWETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MockWETH> {
    return super.deploy(overrides || {}) as Promise<MockWETH>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockWETH {
    return super.attach(address) as MockWETH;
  }
  override connect(signer: Signer): MockWETH__factory {
    return super.connect(signer) as MockWETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockWETHInterface {
    return new utils.Interface(_abi) as MockWETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockWETH {
    return new Contract(address, _abi, signerOrProvider) as MockWETH;
  }
}
