import { Injectable } from '@nestjs/common';
import { CreateWholesalerInput } from './dto/create-wholesaler.input';
import { UpdateWholesalerInput } from './dto/update-wholesaler.input';

@Injectable()
export class WholesalerService {
  create(createWholesalerInput: CreateWholesalerInput) {
    return 'This action adds a new wholesaler';
  }

  findAll() {
    return `This action returns all wholesaler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wholesaler`;
  }

  update(id: number, updateWholesalerInput: UpdateWholesalerInput) {
    return `This action updates a #${id} wholesaler`;
  }

  remove(id: number) {
    return `This action removes a #${id} wholesaler`;
  }
}
