import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({required:true})
  name:String;

  @Prop()
  description: String;

  @Prop()
  imgUrl: String;

  @Prop()
  price: Number;

  @Prop({default: Date.now})
  createAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);