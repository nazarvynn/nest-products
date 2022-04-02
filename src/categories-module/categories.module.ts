import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Category, CategorySchema } from './categories/schemas/category.schema';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoryProductsService } from './category-products/category-products.service';
import { CategoryProductsController } from './category-products/category-products.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  controllers: [CategoriesController, CategoryProductsController],
  providers: [CategoriesService, CategoryProductsService],
})
export class CategoriesModule {}
