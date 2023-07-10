import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { CreateProduct } from '@/products/contracts/create-product';
import { PrismaProductRepository } from './repositories/prisma-product.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: CreateProduct,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [CreateProduct],
})
export class DatabaseModule {}
