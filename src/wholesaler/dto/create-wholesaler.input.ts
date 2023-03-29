import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWholesalerInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  departurePoint: string;
}
