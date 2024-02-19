/// <reference types="node" />
/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2017-2018 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/
import type Transport from "@ledgerhq/hw-transport";
/**
 * Stellar API
 *
 * @example
 * import Str from "@ledgerhq/hw-app-str";
 * const str = new Str(transport)
 */
export default class Str {
    transport: Transport;
    constructor(transport: Transport, scrambleKey?: string);
    getAppConfiguration(): Promise<{
        version: string;
    }>;
    /**
     * get Stellar public key for a given BIP 32 path.
     * @param path a path in BIP 32 format
     * @option boolValidate optionally enable key pair validation
     * @option boolDisplay optionally enable or not the display
     * @return an object with the publicKey (using XLM public key format) and
     * the raw ed25519 public key.
     * @example
     * str.getPublicKey("44'/148'/0'").then(o => o.publicKey)
     */
    getPublicKey(path: string, boolValidate?: boolean, boolDisplay?: boolean): Promise<{
        publicKey: string;
        raw: Buffer;
    }>;
    /**
     * sign a Stellar transaction.
     * @param path a path in BIP 32 format
     * @param transaction signature base of the transaction to sign
     * @return an object with the signature and the status
     * @example
     * str.signTransaction("44'/148'/0'", signatureBase).then(o => o.signature)
     */
    signTransaction(path: string, transaction: Buffer): Promise<{
        signature: Buffer;
    }>;
    /**
     * sign a Stellar transaction hash.
     * @param path a path in BIP 32 format
     * @param hash hash of the transaction to sign
     * @return an object with the signature
     * @example
     * str.signHash("44'/148'/0'", hash).then(o => o.signature)
     */
    signHash(path: string, hash: Buffer): Promise<{
        signature: Buffer;
    }>;
    /**
     * sign a Stellar Soroban Authoration.
     * @param path a path in BIP 32 format
     * @param hashIdPreimage hashIdPreimage to sign. (ENVELOPE_TYPE_SOROBAN_AUTHORIZATION)
     * @return an object with the signature and the status
     * @example
     * str.signSorobanAuthoration("44'/148'/0'", hashIdPreimage).then(o => o.signature)
     */
    signSorobanAuthoration(path: string, hashIdPreimage: Buffer): Promise<{
        signature: Buffer;
    }>;
    signHash_private(path: string, hash: Buffer): Promise<{
        signature: Buffer;
    }>;
}
//# sourceMappingURL=Str.d.ts.map