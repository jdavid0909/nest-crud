import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/product/dto/ProductDto';
import { Product } from 'src/product/schemas/product.schemas';


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {
    }


    async getProducts(): Promise<Product[]> {

        const products = await this.productModel.find()

        return products;
    }


    async getProduct(productId: string): Promise<Product> {

        const product = await this.productModel.findById(productId)

        return product;
    }


    async createProduct(productDto: ProductDto): Promise<Product> {

        const product = new this.productModel(productDto);

        return await product.save();

    }


    async delateProduct(productId: string): Promise<Product> {

        const delateProduct = await this.productModel.findByIdAndDelete(productId)

        return delateProduct;

    }


    async updateProduct(productId: string, product: ProductDto): Promise<Product> {

        const updateProduct = await this.productModel.findByIdAndUpdate(productId, product, { new: true })

        return updateProduct;

    }
}
