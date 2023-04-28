declare module "k6/x/crypto"{

    namespace crypto{
        function hkdf(hashType:HashTypes, password:string, saltIn:ArrayBuffer|null, infoIn:ArrayBuffer|null, keylen:number):ArrayBuffer
        function pbkdf2(password:string, saltIn:ArrayBuffer|null, iter:number, keylen:number,hashType:HashTypes):ArrayBuffer
        function ecdh(algorithm:"ed25519", privateKey:ArrayBuffer, publicKey:ArrayBuffer):ArrayBuffer
        function generateKeyPair(algorithm:"ed25519", seedIn?:ArrayBuffer):KeyPair

        enum HashTypes{
            Md5="md5",
            Sha1="sha1",
            Sha256="sha256",
            Sha384="sha384",
            Sha512="sha512",
        }

        interface KeyPair{
            PrivateKey:ArrayBuffer,
	        PublicKey:ArrayBuffer
        }
    }
}