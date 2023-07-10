import { Product } from './Product';

describe('Product', () => {
  it('should be able to create a new product', () => {
    const sut = Product.create({
      name: 'Sapato da barbie',
      price: 200,
      description:
        'sapato muito bonito para ir assistir o novo filme da barbie',
      availableColoresIds: ['anyId', 'anyId2'],
      availableSizesIds: ['anyId', 'anyId2'],
    });

    expect(sut).toBeInstanceOf(Product);
  });
});
