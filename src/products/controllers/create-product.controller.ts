import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDTO } from './dtos/CreateProductDTO';
import { CreateProductService } from '../services/create-product.service';

@Controller('products')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post('/')
  async handle(@Body() body: CreateProductDTO) {
    const response = await this.createProductService.execute({
      product: body,
    });

    return response;
  }
}
