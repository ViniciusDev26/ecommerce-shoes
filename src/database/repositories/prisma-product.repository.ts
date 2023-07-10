import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateProduct } from '@/products/contracts/create-product';
import { Product } from '@/products/entities/Product';

@Injectable()
export class PrismaProductRepository implements CreateProduct {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        colors: {
          create: product.availableColoresIds.map((colorId) => ({ colorId })),
        },
        sizes: {
          create: product.availableSizesIds.map((sizeId) => ({ sizeId })),
        },
      },
    });
  }
}
