import { Entity } from '@/core/domain/Entity';
import { Optional } from 'src/core/types/Optional';

export interface ProductProps {
  name: string;
  description: string;
  price: number;
  availableColoresIds: string[];
  availableSizesIds: string[];
  createdAt: Date;
  deactivatedAt?: Date;
}

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps, id?: string) {
    super(props, id);
  }

  static create(props: Optional<ProductProps, 'createdAt'>, id?: string) {
    const createdAt = props.createdAt ?? new Date();
    const product = new Product(
      {
        ...props,
        createdAt,
      },
      id,
    );

    return product;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  get availableColoresIds() {
    return this.props.availableColoresIds;
  }

  get availableSizesIds() {
    return this.props.availableSizesIds;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get deactivatedAt() {
    return this.props.deactivatedAt;
  }
}
