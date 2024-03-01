import cryptojs from "crypto-js";

// fonction pour récupérer mon password 
export function cryptPassword(password) {
    const passphrase = import.meta.env.VITE_SECRET_PASSPHRASE;
    return cryptojs.MD5(passphrase + password).toString();
}