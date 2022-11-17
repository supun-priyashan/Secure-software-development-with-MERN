var CryptoJS = require("crypto-js");
const AES_SECRET_KEY = process.env.REACT_APP_AES_SECRET_KEY;

export const encryptMessage = (msg) => {
    return CryptoJS.AES.encrypt(JSON.stringify(msg), AES_SECRET_KEY).toString();
}

export const decryptMessage = (msg) => {
    return JSON.parse(CryptoJS.AES.decrypt(msg, AES_SECRET_KEY).toString(CryptoJS.enc.Utf8));
}