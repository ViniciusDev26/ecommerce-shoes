import { CreateSize } from '@/products/contracts/create-size';
import { Size } from '@/products/entities/Size';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaSizeRepository implements CreateSize {
  constructor(private readonly prisma: PrismaService) {}

  async create(sizes: Size): Promise<void> {
    await this.prisma.size.create({
      data: {
        id: sizes.id,
        number: sizes.sizeNumber,
      },
    });
  }
}
