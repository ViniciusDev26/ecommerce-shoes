import { Size } from '../entities/Size';

export abstract class FindSizeByValue {
  findByValue: (value: string) => Promise<Size>;
}
