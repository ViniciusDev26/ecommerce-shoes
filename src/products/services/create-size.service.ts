import { CreateSize } from '../contracts/create-size';
import { FindSizeByValue } from '../contracts/find-size-by-value';
import { Size } from '../entities/Size';

interface CreateSizesServiceParams {
  size: string;
}

export class CreateSizesService {
  constructor(
    private readonly createManySizesRepository: CreateSize,
    private readonly findSizeByValue: FindSizeByValue,
  ) {}

  async execute(params: CreateSizesServiceParams) {
    const row = await this.findSizeByValue.findByValue(params.size);
    if (row) {
      throw new Error('cant create size, already exists');
    }

    const size = new Size({ sizeNumber: params.size });
    await this.createManySizesRepository.create(size);

    return size;
  }
}
