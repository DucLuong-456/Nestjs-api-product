import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private ProductRepository: typeof Product
  ) {}

  async findAll(): Promise<Product[]> {
    return this.ProductRepository.findAll<Product>();
  }
}