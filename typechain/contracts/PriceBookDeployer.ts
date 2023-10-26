/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface PriceBookDeployerInterface extends utils.Interface {
  functions: {
    "computeArithmeticPriceBookAddress(uint128,uint128)": FunctionFragment;
    "computeGeometricPriceBookAddress(uint128,uint128)": FunctionFragment;
    "deployArithmeticPriceBook(uint128,uint128)": FunctionFragment;
    "deployGeometricPriceBook(uint128,uint128)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "computeArithmeticPriceBookAddress"
      | "computeGeometricPriceBookAddress"
      | "deployArithmeticPriceBook"
      | "deployGeometricPriceBook"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeArithmeticPriceBookAddress",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeGeometricPriceBookAddress",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deployArithmeticPriceBook",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deployGeometricPriceBook",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeArithmeticPriceBookAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeGeometricPriceBookAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployArithmeticPriceBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployGeometricPriceBook",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PriceBookDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceBookDeployerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    computeArithmeticPriceBookAddress(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    computeGeometricPriceBookAddress(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deployArithmeticPriceBook(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deployGeometricPriceBook(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  computeArithmeticPriceBookAddress(
    a: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  computeGeometricPriceBookAddress(
    a: BigNumberish,
    r: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  deployArithmeticPriceBook(
    a: BigNumberish,
    d: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deployGeometricPriceBook(
    a: BigNumberish,
    r: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    computeArithmeticPriceBookAddress(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    computeGeometricPriceBookAddress(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    deployArithmeticPriceBook(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    deployGeometricPriceBook(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    computeArithmeticPriceBookAddress(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeGeometricPriceBookAddress(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployArithmeticPriceBook(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deployGeometricPriceBook(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeArithmeticPriceBookAddress(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeGeometricPriceBookAddress(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployArithmeticPriceBook(
      a: BigNumberish,
      d: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deployGeometricPriceBook(
      a: BigNumberish,
      r: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
