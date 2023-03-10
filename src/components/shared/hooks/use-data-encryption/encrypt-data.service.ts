import CryptoJS from 'crypto-js';

export class EncryptDataService {
  secretKey = 'IITAienI764ZdEFuq0hDtSBxBqO4A8SdH9ZFvGlW';

  encrypt (data: unknown): string {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt (data: string): string {
    return CryptoJS.AES.decrypt(data, this.secretKey).toString();
  }
}
