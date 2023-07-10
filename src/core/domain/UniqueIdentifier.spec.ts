import { UniqueIdentifier } from './UniqueIdentifier';

describe('UniqueIdentifier', () => {
  it('should be able to create an unique identifier', () => {
    const id = UniqueIdentifier.create();
    expect(id).toBeDefined();
    expect(id.value).toBeDefined();
  });

  it('should be able to create an unique identifier from value', () => {
    const id = UniqueIdentifier.create('anyId');
    expect(id).toBeDefined();
    expect(id.value).toBe('anyId');
  });
});
