import { Injectable } from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from '../../@shared/dto';
import { Product, ProductDocument } from '../../@shared/schemas';

@Injectable()
export class CategoryProductsService {
  findAll(categoryId: string) {
    return `[GET] Category ID: ${categoryId}, All Products `;
  }

  findOne(categoryId: string, productId: string) {
    return `[GET] Category ID: ${categoryId}, Product ID: ${productId}`;
  }

  create(categoryId: string, createProductDto: CreateProductDto) {
    return `[POST] Category ID: ${categoryId}, Product Body: ${JSON.stringify(createProductDto || {})}`;
  }

  update(categoryId: string, productId: string, updateProductDto: UpdateProductDto) {
    return `[PATCH] Category ID: ${categoryId}, Product ID: ${productId}, Product Body: ${JSON.stringify(
      updateProductDto || {},
    )}`;
  }

  remove(categoryId: string, productId: string) {
    return `[DELETE] Category ID: ${categoryId}, Product ID: ${productId}`;
  }
}
