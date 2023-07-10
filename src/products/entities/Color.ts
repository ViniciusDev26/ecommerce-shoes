import { Entity } from '@/core/domain/Entity';

export interface ColorProps {
  name: string;
  hex: string;
}

export class Color extends Entity<ColorProps> {
  get name() {
    return this.props.name;
  }

  get hex() {
    return this.props.hex;
  }
}
