import { CreateColor } from '../contracts/create-color';
import { FindColorByName } from '../contracts/find-color-by-name';
import { Color } from '../entities/Color';

interface CreateColorServiceParams {
  name: string;
  hex: string;
}

export class CreateColorService {
  constructor(
    private readonly findColorByNameRepository: FindColorByName,
    private readonly createColorRepository: CreateColor,
  ) {}

  async execute(params: CreateColorServiceParams) {
    const color = await this.findColorByNameRepository.findByName(params.name);
    if (color) {
      throw new Error('cant create size, already exists');
    }

    const newColor = new Color({ name: params.name, hex: params.hex });
    await this.createColorRepository.create(newColor);

    return newColor;
  }
}
