/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Coin } from "./MinterContract";
export interface MinterMessage {
    contractAddress: string;
    sender: string;
    mint: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTime: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    mintTo: ({ recipient }: {
        recipient: string;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class MinterMessageComposer implements MinterMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    mint: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    setWhitelist: ({ whitelist }: {
        whitelist: string;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    updateStartTime: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    updatePerAddressLimit: ({ perAddressLimit }: {
        perAddressLimit: number;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    mintTo: ({ recipient }: {
        recipient: string;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    mintFor: ({ recipient, tokenId }: {
        recipient: string;
        tokenId: number;
    }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
