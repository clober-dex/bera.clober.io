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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface MarketDeployerInterface extends utils.Interface {
  functions: {
    "deploy(address,address,address,bytes32,uint96,int24,uint24,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "deploy"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      string,
      string,
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;

  events: {
    "Deploy(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deploy"): EventFragment;
}

export interface DeployEventObject {
  market: string;
}
export type DeployEvent = TypedEvent<[string], DeployEventObject>;

export type DeployEventFilter = TypedEventFilter<DeployEvent>;

export interface MarketDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketDeployerInterface;

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
    deploy(
      orderToken: string,
      quoteToken: string,
      baseToken: string,
      salt: BytesLike,
      quoteUnit: BigNumberish,
      makerFee: BigNumberish,
      takerFee: BigNumberish,
      priceBook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  deploy(
    orderToken: string,
    quoteToken: string,
    baseToken: string,
    salt: BytesLike,
    quoteUnit: BigNumberish,
    makerFee: BigNumberish,
    takerFee: BigNumberish,
    priceBook: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    deploy(
      orderToken: string,
      quoteToken: string,
      baseToken: string,
      salt: BytesLike,
      quoteUnit: BigNumberish,
      makerFee: BigNumberish,
      takerFee: BigNumberish,
      priceBook: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Deploy(address)"(market?: string | null): DeployEventFilter;
    Deploy(market?: string | null): DeployEventFilter;
  };

  estimateGas: {
    deploy(
      orderToken: string,
      quoteToken: string,
      baseToken: string,
      salt: BytesLike,
      quoteUnit: BigNumberish,
      makerFee: BigNumberish,
      takerFee: BigNumberish,
      priceBook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      orderToken: string,
      quoteToken: string,
      baseToken: string,
      salt: BytesLike,
      quoteUnit: BigNumberish,
      makerFee: BigNumberish,
      takerFee: BigNumberish,
      priceBook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
