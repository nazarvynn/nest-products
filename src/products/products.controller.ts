import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';

import { CreateProductDto, UpdateProductDto, PartialUpdateProductDto } from './dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  // @Redirect('https://google.com', HttpStatus.PERMANENT_REDIRECT)
  getAll(): Record<string, any>[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Record<string, any> {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', 'none')
  create(@Body() createProductDto: CreateProductDto): Record<string, any> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): string {
    return 'Update: ' + id;
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() partialUpdateProductDto: PartialUpdateProductDto): string {
    return 'partialUpdate: ' + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'Remove: ' + id;
  }
}
