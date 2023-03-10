export class DataEncryptionOutDto {
  original: unknown;
  encrypted: string = '';

  constructor (data?: DataEncryptionOutDto) {
    if (data !== null) {
      this.original = data?.original;
      this.encrypted = data?.encrypted ?? '';
    }
  }
}
