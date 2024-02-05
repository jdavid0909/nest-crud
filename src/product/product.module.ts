import { Module } from '@nestjs/common';
import { ProductController } from './controller/product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schemas';
import { ProductService } from './service/product/product.service';


@Module({
  controllers: [ProductController],
  imports: [MongooseModule.forRoot('mongodb+srv://jdavid198:kwhNkh2T4zkXapqy@miclustercafe.soh51ly.mongodb.net/cafeDB'),
  MongooseModule.forFeature([{ name: 'Product', 
  schema: ProductSchema }])

  ],
  providers:[ProductService]
})
export class ProductModule { }
