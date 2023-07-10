import { Injectable } from '@nestjs/common';
import { CreateProduct } from '../contracts/create-product';
import { Product } from '../entities/Product';

interface CreateProductServiceParams {
  product: {
    name: string;
    description: string;
    price: number;
    availableColoresIds: string[];
    availableSizesIds: string[];
  };
}

@Injectable()
export class CreateProductService {
  constructor(private createProductRepository: CreateProduct) {}

  async execute(params: CreateProductServiceParams) {
    const product = Product.create(params.product);

    await this.createProductRepository.create(product);
  }
}
