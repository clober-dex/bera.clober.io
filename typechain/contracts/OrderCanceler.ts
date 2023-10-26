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

export declare namespace CloberOrderCanceler {
  export type CancelParamsStruct = { market: string; tokenIds: BigNumberish[] };

  export type CancelParamsStructOutput = [string, BigNumber[]] & {
    market: string;
    tokenIds: BigNumber[];
  };
}

export interface OrderCancelerInterface extends utils.Interface {
  functions: {
    "cancel((address,uint256[])[])": FunctionFragment;
    "cancelTo((address,uint256[])[],address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "cancel" | "cancelTo"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancel",
    values: [CloberOrderCanceler.CancelParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTo",
    values: [CloberOrderCanceler.CancelParamsStruct[], string]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelTo", data: BytesLike): Result;

  events: {};
}

export interface OrderCanceler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderCancelerInterface;

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
    cancel(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    cancelTo(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  cancel(
    paramsList: CloberOrderCanceler.CancelParamsStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  cancelTo(
    paramsList: CloberOrderCanceler.CancelParamsStruct[],
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    cancelTo(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancel(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    cancelTo(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    cancelTo(
      paramsList: CloberOrderCanceler.CancelParamsStruct[],
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
