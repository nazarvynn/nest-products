import { Module } from '@nestjs/common';

import { SharedModule } from '../@shared/shared.module';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [SharedModule],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
