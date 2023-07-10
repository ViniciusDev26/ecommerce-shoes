import { Color } from '../entities/Color';

export abstract class CreateColor {
  create: (color: Color) => Promise<void>;
}
