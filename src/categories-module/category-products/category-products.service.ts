import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto, UpdateProductDto } from '../../@shared/dto';
import { Product, ProductDocument } from '../../@shared/schemas';
import { Category, CategoryDocument } from '../categories/schemas/category.schema';

@Injectable()
export class CategoryProductsService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  findAll(categoryId: string) {
    return this.categoryModel.findById(categoryId).get('products');
    // return `[GET] Category ID: ${categoryId}, All Products `;
  }

  findOne(categoryId: string, productId: string) {
    return `[GET] Category ID: ${categoryId}, Product ID: ${productId}`;
  }

  create(categoryId: string, createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel({ ...createProductDto, categoryId });
    this.categoryModel.findByIdAndUpdate(
      categoryId,
      { $push: { products: createdProduct } },
      { new: true, useFindAndModify: false },
    );
    return createdProduct.save();

    // return `[POST] Category ID: ${categoryId}, Product Body: ${JSON.stringify(createProductDto || {})}`;
  }

  update(categoryId: string, productId: string, updateProductDto: UpdateProductDto) {
    // return this.categoryModel.findByIdAndUpdate(categoryId, { ...updateProductDto, categoryId }, { new: true });
    return `[PATCH] Category ID: ${categoryId}, Product ID: ${productId}, Product Body: ${JSON.stringify(
      updateProductDto || {},
    )}`;
  }

  remove(categoryId: string, productId: string) {
    return `[DELETE] Category ID: ${categoryId}, Product ID: ${productId}`;
  }
}
