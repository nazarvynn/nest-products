import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/nest-products')],
  controllers: [],
  providers: [],
})
export class AppModule {}
