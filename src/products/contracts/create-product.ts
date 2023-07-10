import { Product } from '../entities/Product';

export abstract class CreateProduct {
  create: (product: Product) => Promise<void>;
}
