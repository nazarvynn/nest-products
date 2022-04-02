import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

import { Product } from '../../products/schemas/product.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  owner: Product;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
