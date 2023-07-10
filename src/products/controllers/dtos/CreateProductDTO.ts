import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  description: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  availableColoresIds: string[];

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  availableSizesIds: string[];
}
