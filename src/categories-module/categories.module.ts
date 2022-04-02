import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '../@shared/shared.module';
import { Product, ProductSchema } from '../@shared/schemas';
import { Category, CategorySchema } from './categories/schemas/category.schema';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoryProductsService } from './category-products/category-products.service';
import { CategoryProductsController } from './category-products/category-products.controller';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [CategoriesController, CategoryProductsController],
  providers: [CategoriesService, CategoryProductsService],
})
export class CategoriesModule {}
