import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Wholesaler {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  departurePoint: string;

  @Field(() => Date)
  createdAt: Date;
}
