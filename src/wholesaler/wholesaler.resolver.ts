import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WholesalerService } from './wholesaler.service';
import { Wholesaler } from './entities/wholesaler.entity';
import { CreateWholesalerInput } from './dto/create-wholesaler.input';
import { UpdateWholesalerInput } from './dto/update-wholesaler.input';

@Resolver(() => Wholesaler)
export class WholesalerResolver {
  constructor(private readonly wholesalerService: WholesalerService) {}

  @Mutation(() => Wholesaler)
  createWholesaler(@Args('createWholesalerInput') createWholesalerInput: CreateWholesalerInput) {
    return this.wholesalerService.create(createWholesalerInput);
  }

  @Query(() => [Wholesaler], { name: 'wholesaler' })
  findAll() {
    return this.wholesalerService.findAll();
  }

  @Query(() => Wholesaler, { name: 'wholesaler' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wholesalerService.findOne(id);
  }

  @Mutation(() => Wholesaler)
  updateWholesaler(@Args('updateWholesalerInput') updateWholesalerInput: UpdateWholesalerInput) {
    return this.wholesalerService.update(updateWholesalerInput.id, updateWholesalerInput);
  }

  @Mutation(() => Wholesaler)
  removeWholesaler(@Args('id', { type: () => Int }) id: number) {
    return this.wholesalerService.remove(id);
  }
}
