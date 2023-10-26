/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface GeometricPriceBookInterface extends utils.Interface {
  functions: {
    "indexToPrice(uint16)": FunctionFragment;
    "maxPriceIndex()": FunctionFragment;
    "priceToIndex(uint256,bool)": FunctionFragment;
    "priceUpperBound()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "indexToPrice"
      | "maxPriceIndex"
      | "priceToIndex"
      | "priceUpperBound"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "indexToPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxPriceIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceToIndex",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "priceUpperBound",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "indexToPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxPriceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceToIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceUpperBound",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GeometricPriceBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GeometricPriceBookInterface;

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
    indexToPrice(
      priceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    maxPriceIndex(overrides?: CallOverrides): Promise<[number]>;

    priceToIndex(
      price: BigNumberish,
      roundingUp: boolean,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & { index: number; correctedPrice: BigNumber }
    >;

    priceUpperBound(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  indexToPrice(
    priceIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxPriceIndex(overrides?: CallOverrides): Promise<number>;

  priceToIndex(
    price: BigNumberish,
    roundingUp: boolean,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber] & { index: number; correctedPrice: BigNumber }
  >;

  priceUpperBound(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    indexToPrice(
      priceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxPriceIndex(overrides?: CallOverrides): Promise<number>;

    priceToIndex(
      price: BigNumberish,
      roundingUp: boolean,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber] & { index: number; correctedPrice: BigNumber }
    >;

    priceUpperBound(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    indexToPrice(
      priceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxPriceIndex(overrides?: CallOverrides): Promise<BigNumber>;

    priceToIndex(
      price: BigNumberish,
      roundingUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceUpperBound(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    indexToPrice(
      priceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxPriceIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceToIndex(
      price: BigNumberish,
      roundingUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceUpperBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
