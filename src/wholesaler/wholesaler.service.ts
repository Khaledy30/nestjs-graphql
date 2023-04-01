import { Injectable } from '@nestjs/common';
import { CreateWholesalerInput } from './dto/create-wholesaler.input';
import { UpdateWholesalerInput } from './dto/update-wholesaler.input';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class WholesalerService {

  constructor(private prisma: PrismaService) {}
  create(createWholesalerInput: CreateWholesalerInput) {
    return this.prisma.wholesaler.create({
      data: {
        departurePoint: createWholesalerInput.departurePoint,
        description: createWholesalerInput.description,
        name: createWholesalerInput.name
      }
    })
  }

  findAll() {
    return this.prisma.wholesaler.findMany()
  }

  findOne(id: number) {
    return this.prisma.wholesaler.findUnique({where: {id}})
  }

  async update(id: number, updateWholesalerInput: UpdateWholesalerInput) {
    const wholesalerAlreadyExists = await this.prisma.wholesaler.findUnique({where: {id}})

    if (!wholesalerAlreadyExists) {
        throw new Error('Wholesaler not exist')
    }
    return this.prisma.wholesaler.update({where: {id}, data: {
          name: updateWholesalerInput.name,
          departurePoint: updateWholesalerInput.departurePoint
      }})
  }

  async remove(id: number) {
    const wholesalerAlreadyExists = await this.prisma.wholesaler.findUnique({where: {id}})

    if (!wholesalerAlreadyExists) {
        throw new Error('Wholesaler not exist')
    }
    return this.prisma.wholesaler.delete({where: {id}})
  }
}
