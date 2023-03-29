import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;
}
