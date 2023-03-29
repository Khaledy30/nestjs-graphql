import { CreateWholesalerInput } from './create-wholesaler.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWholesalerInput extends PartialType(CreateWholesalerInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  departurePoint: string;
}
