import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from '../../@shared/dto';
import { Product } from '../../@shared/schemas';
import { CategoryProductsService } from './category-products.service';

@Controller('/:categoryId/products')
export class CategoryProductsController {
  constructor(private readonly categoryProductsService: CategoryProductsService) {}

  @Get()
  findAll(@Param('categoryId') categoryId: string) {
    return this.categoryProductsService.findAll(categoryId);
  }

  @Get(':productId')
  findOne(@Param('categoryId') categoryId: string, @Param('productId') productId: string) {
    return this.categoryProductsService.findOne(categoryId, productId);
  }

  @Post()
  create(@Param('categoryId') categoryId: string, @Body() createProductDto: CreateProductDto) {
    return this.categoryProductsService.create(categoryId, createProductDto);
  }

  @Patch(':productId')
  update(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.categoryProductsService.update(categoryId, productId, updateProductDto);
  }

  @Delete(':productId')
  remove(@Param('categoryId') categoryId: string, @Param('productId') productId: string) {
    return this.categoryProductsService.remove(categoryId, productId);
  }
}
