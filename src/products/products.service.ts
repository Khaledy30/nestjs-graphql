import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        name: createProductInput.name,
        description: createProductInput.description,
        price: createProductInput.price
      }
    });
  }

  findAll() {
    return this.prisma.product.findMany()
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({where: {id}})
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    const productAlreadyExists = await this.prisma.product.findUnique({where: {id}})

    if (!productAlreadyExists) {
        throw new Error("Product not exist")
    }
    return this.prisma.product.update({where: {id}, data: {
        name: updateProductInput.name,
        description: updateProductInput.description,
        price: updateProductInput.price
      }})
  }

  async remove(id: number) {
    const productAlreadyExists = await this.prisma.product.findUnique({where: {id}})

    if (!productAlreadyExists) {
        throw new Error("Product not exist!")
    }
    return this.prisma.product.delete({where: {id}})
  }
}
