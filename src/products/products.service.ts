import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll(): Record<string, any>[] {
    return this.products;
  }

  getById(id: string): Record<string, any> {
    return this.products.find((product) => product.id === id);
  }

  create(productDto: CreateProductDto): Record<string, any> {
    const newProduct = { ...productDto, id: Date.now().toString() };
    this.products.push(newProduct);
    return newProduct;
  }
}
