import { Color } from '../entities/Color';

export abstract class FindColorByName {
  findByName: (name: string) => Promise<Color>;
}
