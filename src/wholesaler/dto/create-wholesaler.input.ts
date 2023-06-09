import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWholesalerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  departurePoint: string;
}
