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

  async findAll(categoryId: string): Promise<Product[]> {
    const { products } = await this.categoryModel.findById(categoryId, { products: 1 }).populate('products');
    return products;
  }

  async findOne(categoryId: string, productId: string): Promise<Product> {
    const { products } = await this.categoryModel.findById(categoryId, { products: productId }).populate('products');
    return products[0];
  }

  async create(categoryId: string, productDto: CreateProductDto): Promise<Product> {
    const createdProduct = await new this.productModel({ ...productDto, categoryId }).save();

    await this.categoryModel.findByIdAndUpdate(
      categoryId,
      { $push: { products: createdProduct._id } },
      { new: true, useFindAndModify: false },
    );
    return createdProduct;
  }

  async update(productId: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(productId, productDto, { new: true });
  }

  async remove(categoryId: string, productId: string): Promise<Product> {
    await this.categoryModel.findByIdAndUpdate(categoryId, { $pull: { products: productId } });
    return this.productModel.findByIdAndRemove(productId);
  }
}

// TODO: Examples
/*
const addProductToCategory = (categoryId, product) => {
  return this.categoryModel.findByIdAndUpdate(
    categoryId,
    { $push: { products: product._id } },
    { new: true, useFindAndModify: false },
  )
}

const addCategoryToProduct = (productId, category) => {
  return this.productModel.findByIdAndUpdate(
    productId,
    { $push: { categories: category._id } },
    { new: true, useFindAndModify: false },
  )
}
*/
