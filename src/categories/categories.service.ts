import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(categoryDto);
    return createdCategory.save();
  }

  async update(id: string, categoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, categoryDto, { new: true });
  }

  async remove(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
