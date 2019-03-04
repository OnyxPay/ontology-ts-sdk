/// <reference types="node" />
export declare class Ecies {
    /**
     * Algorithm used for encryption.
     */
    encAlg: string;
    /**
     * Hash Algorithm used for kdf.
     */
    hashAlg: string;
    /**
     * Hash digest byte size.
     */
    digestSize: number;
    /**
     * Key input and out put format.
     */
    keyFormat: string;
    /**
     * Initialized Vector
     */
    iv: Buffer;
    /**
     * Elliptic Curve instance
     */
    ec: any;
    /**
     * key pair from
     * ec instance
     */
    keyPair: any;
    /**
     * if true, the pubkey will be
     * in compressed format, begin with '02' or '03'.
     * if false, begin with '04'
     */
    compact: boolean;
    /**
     * for curve name,
     * go https://github.com/indutny/elliptic
     * for reference
     */
    constructor(Curve: string);
    /**
     * generate random key pair
     */
    generateKeyPair(): any;
    /**
     * set key pair with private key
     * @param privHex private key in hex coding.
     */
    setKeyPair(privHex: string): void;
    /**
     * get key pair in use
     * @return = {pri, pub}
     * all in hex coding.
     */
    getKeyPair(): any;
    /**
     * encrypt a message with given
     * public key and initialized vector
     *
     * @param pubkey hex string of public key
     * @param msg byte buffer of message
     * @param keylen byte length of kdf's output.
     */
    enc(pubkey: string, msg: Buffer, keylen: number, _iv?: string): any;
    /**
     * encrypt a message with given
     * public key and initialized vector
     *
     * @param msgCipher
     * @param out
     * @param iv
     * @param keylen
     */
    dec(msgCipher: string, out: string, iv: any, keylen: number): Buffer;
    kdf2(seed: Buffer, len: number, digestSize: number, hashFunc: string): Buffer[];
    I2OSP(num: number, len: number): Buffer;
}
