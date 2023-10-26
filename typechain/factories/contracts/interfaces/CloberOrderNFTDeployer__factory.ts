/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CloberOrderNFTDeployer,
  CloberOrderNFTDeployerInterface,
} from "../../../contracts/interfaces/CloberOrderNFTDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "computeTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class CloberOrderNFTDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): CloberOrderNFTDeployerInterface {
    return new utils.Interface(_abi) as CloberOrderNFTDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CloberOrderNFTDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CloberOrderNFTDeployer;
  }
}
