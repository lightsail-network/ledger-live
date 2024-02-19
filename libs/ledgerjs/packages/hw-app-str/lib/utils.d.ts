/// <reference types="node" />
export declare function splitPath(path: string): number[];
export declare function foreach<T, A>(arr: T[], callback: (arg0: T, arg1: number) => Promise<A>): Promise<A[]>;
export declare function crc16xmodem(buf: Buffer, previous?: number): number;
export declare function encodeEd25519PublicKey(rawPublicKey: Buffer): string;
export declare function verifyEd25519Signature(data: Buffer, signature: Buffer, publicKey: Buffer): boolean;
export declare function hash(data: Buffer): any;
export declare function checkStellarBip32Path(path: string): void;
//# sourceMappingURL=utils.d.ts.map