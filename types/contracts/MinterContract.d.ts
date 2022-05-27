/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export declare type Uint128 = string;
export interface ConfigResponse {
    admin: string;
    base_token_uri: string;
    num_tokens: number;
    per_address_limit: number;
    sg721_address: string;
    sg721_code_id: number;
    start_time: Timestamp;
    unit_price: Coin;
    whitelist?: string | null;
    [k: string]: unknown;
}
export interface Coin {
    amount: Uint128;
    denom: string;
    [k: string]: unknown;
}
export declare type Addr = string;
export interface Config {
    admin: Addr;
    base_token_uri: string;
    num_tokens: number;
    per_address_limit: number;
    sg721_code_id: number;
    start_time: Timestamp;
    unit_price: Coin;
    whitelist?: Addr | null;
    [k: string]: unknown;
}
export declare type Decimal = string;
export interface InstantiateMsg {
    base_token_uri: string;
    num_tokens: number;
    per_address_limit: number;
    sg721_code_id: number;
    sg721_instantiate_msg: InstantiateMsg1;
    start_time: Timestamp;
    unit_price: Coin;
    whitelist?: string | null;
    [k: string]: unknown;
}
export interface InstantiateMsg1 {
    collection_info: CollectionInfoFor_RoyaltyInfoResponse;
    minter: string;
    name: string;
    symbol: string;
    [k: string]: unknown;
}
export interface CollectionInfoFor_RoyaltyInfoResponse {
    creator: string;
    description: string;
    external_link?: string | null;
    image: string;
    royalty_info?: RoyaltyInfoResponse | null;
    [k: string]: unknown;
}
export interface RoyaltyInfoResponse {
    payment_address: string;
    share: Decimal;
    [k: string]: unknown;
}
export interface MintCountResponse {
    address: string;
    count: number;
    [k: string]: unknown;
}
export interface MintPriceResponse {
    current_price: Coin;
    public_price: Coin;
    whitelist_price?: Coin | null;
    [k: string]: unknown;
}
export interface MintableNumTokensResponse {
    count: number;
    [k: string]: unknown;
}
export interface StartTimeResponse {
    start_time: string;
    [k: string]: unknown;
}
export interface MinterReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    mintableNumTokens: () => Promise<MintableNumTokensResponse>;
    startTime: () => Promise<StartTimeResponse>;
    mintPrice: () => Promise<MintPriceResponse>;
    mintCount: ({ address }: {
        address: string;
    }) => Promise<MintCountResponse>;
}
export declare class MinterQueryClient implements MinterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    mintableNumTokens: () => Promise<MintableNumTokensResponse>;
    startTime: () => Promise<StartTimeResponse>;
    mintPrice: () => Promise<MintPriceResponse>;
    mintCount: ({ address }: {
        address: string;
    }) => Promise<MintCountResponse>;
}
export interface MinterInterface extends MinterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    mint: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintTo: ({ recipient }: {
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdraw: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class MinterClient extends MinterQueryClient implements MinterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    mint: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintTo: ({ recipient }: {
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    withdraw: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
