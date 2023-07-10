import { Module } from '@nestjs/common';
import { CreateProductController } from './controllers/create-product.controller';
import { CreateProductService } from './services/create-product.service';

@Module({
  controllers: [CreateProductController],
  providers: [CreateProductService],
})
export class ProductModule {}
