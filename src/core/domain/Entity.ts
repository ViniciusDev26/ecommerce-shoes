import { UniqueIdentifier } from './UniqueIdentifier';

export abstract class Entity<T = unknown> {
  private _id: UniqueIdentifier;
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = UniqueIdentifier.create(id);
    this.props = props;
  }

  get id(): string {
    return this._id.value;
  }
}
