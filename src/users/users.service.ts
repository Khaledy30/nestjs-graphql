import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {
  }
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        email: createUserInput.email,
        password: createUserInput.password,
        username: createUserInput.username
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  async findOne(id: number) {
    const userAlreadyExists = await this.prisma.user.findUnique({where: {id}})

    if (!userAlreadyExists) {
        throw new Error('User not exist')
    }
    return this.prisma.user.findUnique({where: {id}})
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const userAlreadyExists = await this.prisma.user.findUnique({where: {id}})

    if (!userAlreadyExists) {
      throw new Error('User not exist')
    }

    return this.prisma.user.update({where: {id}, data: {
        email: updateUserInput.email,
        password: updateUserInput.password,
        username: updateUserInput.username
    }})
  }

  async remove(id: number) {
    const userAlreadyExists = await this.prisma.user.findUnique({where: {id}})

    if (!userAlreadyExists) {
      throw new Error('User not exist')
    }
    return this.prisma.user.delete({where: {id}})
  }
}
