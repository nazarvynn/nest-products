import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from '../../@shared/dto';
import { Product } from '../../@shared/schemas';
import { CategoryProductsService } from './category-products.service';

@Controller('/:categoryId/products')
export class CategoryProductsController {
  constructor(private readonly categoryProductsService: CategoryProductsService) {}

  @Get()
  findAll(@Param('categoryId') categoryId: string): Promise<Product[]> {
    return this.categoryProductsService.findAll(categoryId);
  }

  @Get(':productId')
  findOne(@Param('categoryId') categoryId: string, @Param('productId') productId: string): Promise<Product> {
    return this.categoryProductsService.findOne(categoryId, productId);
  }

  @Post()
  create(@Param('categoryId') categoryId: string, @Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.categoryProductsService.create(categoryId, createProductDto);
  }

  @Patch(':productId')
  update(@Param('productId') productId: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.categoryProductsService.update(productId, updateProductDto);
  }

  @Delete(':productId')
  remove(@Param('categoryId') categoryId: string, @Param('productId') productId: string) {
    return this.categoryProductsService.remove(categoryId, productId);
  }
}
