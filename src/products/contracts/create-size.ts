import { Size } from '../entities/Size';

export abstract class CreateSize {
  create: (size: Size) => Promise<void>;
}
