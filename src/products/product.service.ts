import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const products = this.productRepository.find();
    if(!products) throw new Error('products is empty!')
    return products;
  }

  async create(product: Partial<Product>): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOneById(id);
  }

  async delete(id: number): Promise<void> {
    const product =await this.productRepository.findOneById(id);
    if(!product) throw new Error('product does not exist!')
    await this.productRepository.delete(id);
  }

  async findOne(id: number): Promise<Product> {
    const product =await this.productRepository.findOneById(id);
    if(!product) throw new Error('product not found!')
    return product;
  }

}