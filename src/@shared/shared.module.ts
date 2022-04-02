import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Product, ProductSchema } from './schemas';
import { ProductsService } from './services';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class SharedModule {}
