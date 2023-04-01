import { CreateWholesalerInput } from './create-wholesaler.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWholesalerInput extends PartialType(CreateWholesalerInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  departurePoint: string;
}
