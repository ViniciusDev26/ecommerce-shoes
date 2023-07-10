import { Entity } from '@/core/domain/Entity';

export interface SizeProps {
  sizeNumber: string;
}

export class Size extends Entity<SizeProps> {
  get sizeNumber() {
    return this.props.sizeNumber;
  }
}
