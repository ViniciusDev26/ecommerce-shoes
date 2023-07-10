import { randomUUID } from 'crypto';

export class UniqueIdentifier {
  private _value: string;

  private constructor(identifier?: string) {
    this._value = identifier ?? randomUUID();
  }

  static create(value?: string): UniqueIdentifier {
    const id = new UniqueIdentifier(value);

    return id;
  }

  get value(): string {
    return this._value;
  }
}
