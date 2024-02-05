import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ProductDto } from 'src/product/dto/ProductDto';
import { Product } from 'src/product/schemas/product.schemas';
import { ProductService } from 'src/product/service/product/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {

    }


    @Post("/create")
    async createPost(@Res() res, @Body() productDto: ProductDto) {

        const product = await this.productService.createProduct(productDto)

        return res.status(HttpStatus.OK).json({
            message: 'create',
            product: product
        })
    }


    @Get()
    async getProducts(@Res() res) {

        const product: Product[] = await this.productService.getProducts()

        return res.status(HttpStatus.OK).json({
            message: 'todos los productos',
            product: product
        })
    }


    @Get('/:id')
    async getProductsById(@Res() res, @Param('id') id) {

        const product: Product = await this.productService.getProduct(id)

        return res.status(HttpStatus.OK).json({
            message: 'todos los productos',
            product: product
        })
    }


    @Delete()
    async delete(@Res() res, @Query('id') id) {

        const product: Product = await this.productService.delateProduct(id)

        return res.status(HttpStatus.OK).json({
            message: 'todos los productos',
            product: product
        })
    }


    @Put()
    async update(@Res() res, @Query('id') id, @Body() productDto:ProductDto) {

        const product: Product = await this.productService.updateProduct(id, productDto)

        return res.status(HttpStatus.OK).json({
            message: 'todos los productos',
            product: product
        })
    }



}
