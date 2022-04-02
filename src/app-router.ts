import { CategoriesModule } from './categories-module/categories.module';
import { ProductsModule } from './products-module/products.module';

export default [
  {
    path: '/categories',
    module: CategoriesModule,
  },
  {
    path: '/products',
    module: ProductsModule,
  },
];
